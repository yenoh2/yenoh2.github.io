import asyncio
import edge_tts
import json
import os
import re
from datetime import datetime, timezone
import argparse
from mutagen.mp3 import MP3

def convert_to_slug(text):
    slug = re.sub(r'[^a-z0-9]+', '-', text.lower())
    return slug.strip('-')

async def write_speech_clip(path, text, voice, speaking_rate):
    # Map 'speakingRate' (-50 to +100) from pack definitions
    # Example mapping: 
    # 'natural' (0%), 'tight' (12%), 'brisk' (24%), 'rapid' (36%), 'sprint' (48%)
    # Wait, the packs will be defined with edge-tts native rate strings like '+12%'
    rate_str = speaking_rate if speaking_rate.startswith('+') or speaking_rate.startswith('-') else f"+{speaking_rate}%"
    communicate = edge_tts.Communicate(text, voice, rate=rate_str)
    await communicate.save(path)

async def new_clip_manifest_entry(base_path, path, text, speaking_rate, voice_name, pack_id):
    # Get mp3 info
    audio = MP3(path)
    original_ms = round(audio.info.length * 1000, 1)
    
    # Calculate silence trims
    import miniaudio
    try:
        file_info = miniaudio.mp3_read_file_f32(path)
        samples = file_info.samples
        sample_rate = file_info.sample_rate
        channels = file_info.nchannels
        threshold = 1.0 * 0.015
        start_idx = 0
        num = len(samples)
        for i in range(num):
            if abs(samples[i]) > threshold:
                start_idx = i
                break
        end_idx = num - 1
        for i in range(num - 1, -1, -1):
            if abs(samples[i]) > threshold:
                end_idx = i
                break
        leading_ms = round((start_idx // channels) / sample_rate * 1000, 1)
        trailing_ms = round(((num // channels - 1 - end_idx // channels)) / sample_rate * 1000, 1)
    except Exception as e:
        print(f"Failed to calculate trim for {path}: {e}")
        leading_ms = 0
        trailing_ms = 0

    pack_max_bpms = {
        "natural": 110,
        "tight": 127,
        "brisk": 144,
        "rapid": 156,
        "sprint": 200
    }
    max_bpm = pack_max_bpms.get(pack_id, 200)
    spoofed_ms = round((30000 / max_bpm) * 0.9, 1)

    # Convert absolute path to relative path
    rel_path = os.path.relpath(path, base_path).replace("\\", "/")

    return {
        "text": text,
        "rate": speaking_rate,
        "speakingRate": speaking_rate,
        "file": rel_path,
        "durationMs": spoofed_ms,
        "originalMs": original_ms,
        "startOffsetMs": leading_ms,
        "leadingTrimMs": leading_ms,
        "trailingTrimMs": trailing_ms,
        "sampleRate": audio.info.sample_rate,
        "channels": audio.info.channels,
        "bitsPerSample": 16, # approximation
        "voiceName": voice_name,
        "languageCode": voice_name.split('-')[0] + '-' + voice_name.split('-')[1].upper()
    }

async def generate():
    parser = argparse.ArgumentParser()
    parser.add_argument("--output_root", default="assets/audio/spoken-count")
    parser.add_argument("--voice_name", default="en-US-ChristopherNeural")
    parser.add_argument("--packs", nargs='+', default=["natural:+30%", "tight:+50%", "brisk:+70%", "rapid:+85%", "sprint:+100%"])
    args = parser.parse_args()

    word_clips = [
        {"id": "one", "text": "one"},
        {"id": "and", "text": "and"},
        {"id": "two", "text": "two"},
        {"id": "three", "text": "three"},
        {"id": "four", "text": "four"}
    ]

    demo_clips = [
        {"id": "demo_full_count_4_4", "text": "one and two and three and four and"},
        {"id": "demo_count_in_4", "text": "one two three four"}
    ]

    pair_clips = [
        {"id": "one_and", "text": "one and"},
        {"id": "two_and", "text": "two and"},
        {"id": "three_and", "text": "three and"},
        {"id": "four_and", "text": "four and"}
    ]

    voice_slug = convert_to_slug(f"edge-{args.voice_name}")
    # Fix for script working dir
    base_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
    voice_root = os.path.join(base_dir, args.output_root, voice_slug)
    
    os.makedirs(voice_root, exist_ok=True)

    manifest = {
        "generatedAt": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
        "provider": "microsoft-edge-tts",
        "voiceHint": args.voice_name,
        "voiceDescription": args.voice_name,
        "voiceId": voice_slug,
        "voiceName": args.voice_name,
        "packs": []
    }

    summary_rows = []
    target_fill = 0.9

    for pack_spec in args.packs:
        pack_id, speaking_rate = pack_spec.split(":")

        pack_dir = os.path.join(voice_root, pack_id)
        word_dir = os.path.join(pack_dir, "words")
        pair_dir = os.path.join(pack_dir, "pairs")
        demo_dir = os.path.join(pack_dir, "demos")

        os.makedirs(word_dir, exist_ok=True)
        os.makedirs(pair_dir, exist_ok=True)
        os.makedirs(demo_dir, exist_ok=True)

        word_entries = {}
        for clip in word_clips:
            clip_path = os.path.join(word_dir, f"{clip['id']}.mp3")
            print(f"Generating {clip['id']} at {speaking_rate}...")
            await write_speech_clip(clip_path, clip['text'], args.voice_name, speaking_rate)
            word_entries[clip['id']] = await new_clip_manifest_entry(voice_root, clip_path, clip['text'], speaking_rate, args.voice_name, pack_id)

        pair_entries = {}
        for clip in pair_clips:
            clip_path = os.path.join(pair_dir, f"{clip['id']}.mp3")
            print(f"Generating {clip['id']} at {speaking_rate}...")
            await write_speech_clip(clip_path, clip['text'], args.voice_name, speaking_rate)
            pair_entries[clip['id']] = await new_clip_manifest_entry(voice_root, clip_path, clip['text'], speaking_rate, args.voice_name, pack_id)

        demo_entries = {}
        for clip in demo_clips:
            clip_path = os.path.join(demo_dir, f"{clip['id']}.mp3")
            print(f"Generating {clip['id']} at {speaking_rate}...")
            await write_speech_clip(clip_path, clip['text'], args.voice_name, speaking_rate)
            demo_entries[clip['id']] = await new_clip_manifest_entry(voice_root, clip_path, clip['text'], speaking_rate, args.voice_name, pack_id)

        pack_data = {
            "id": pack_id,
            "rate": speaking_rate,
            "speakingRate": speaking_rate,
            "words": word_entries,
            "pairs": pair_entries,
            "demos": demo_entries
        }
        manifest["packs"].append(pack_data)

        # compute summaries
        max_word_ms = max([w['durationMs'] for w in word_entries.values()])
        max_pair_ms = max([w['durationMs'] for w in pair_entries.values()])
        quarter_fits = int(60000 / (max_word_ms / target_fill))
        pair_fits = int(60000 / (max_pair_ms / target_fill))
        
        summary_rows.append({
            "Pack": pack_id,
            "SpeakingRate": speaking_rate,
            "MaxWordMs": max_word_ms,
            "QuarterFitsThroughBpm": quarter_fits,
            "OneAndFitsThroughBpm": pair_fits
        })

    manifest_path = os.path.join(voice_root, "manifest.json")
    with open(manifest_path, "w", encoding="utf-8") as f:
        json.dump(manifest, f, indent=4)

    print(f"\nGenerated spoken-count samples in {voice_root}")
    print(f"Voice: {args.voice_name}")
    print("-" * 80)
    for row in summary_rows:
        print(f"Pack: {row['Pack']:<10} | Rate: {row['SpeakingRate']:<6} | Max Word: {row['MaxWordMs']:<6}ms | 'One' fits up to: {row['QuarterFitsThroughBpm']:<4} BPM")
    print("-" * 80)

if __name__ == "__main__":
    asyncio.run(generate())
