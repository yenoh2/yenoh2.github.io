# Metronome Project Requirements

## Overview
A high-precision, visually intuitive metronome application designed for musicians. The app focuses on ease of use, clear visual feedback, and tactile tempo control.

## Core Features

### 1. Tempo Control
- **BPM Range**: Support for a standard range (e.g., 20 - 300 BPM).
- **Control Interface**:
  - A large circular dial for coarse and fine tempo adjustments.
  - Digital readout of current BPM.
  - Tempo marking label (e.g., Largo, Moderato, Allegro) based on BPM.

### 2. Time Signature & Rhythm
- **Time Signature**: Common time signatures: 2/4, 3/4, 4/4, 6/8.
- **Subdivisions**: Support for different note values (Quarter, Eighth, Sixteenth, etc.).
- **Visual Pacing**: Progress indicators to show the current beat within a measure (bar count matches time signature).

### 3. Playback Controls
- **Start/Stop**: Clear play/pause button to toggle the metronome.
- **Audio Feedback**: Woodblock click sound for beats. Option to toggle "Accent" on/off (distinct pitch for downbeat).

## User Interface (UI) Components
Inspired by the Layout reference, adapted to MVP features only:
- **Beat Indicators**: Horizontal bars at the top for beat tracking (count matches time signature).
- **Settings Row**:
  - Time Signature selector (e.g., "4/4").
  - Subdivision / Note Value selector.
- **BPM Display**: Large numeric readout with tempo marking label.
- **Main Dial**: Circular dial for tempo adjustment.
- **Play Button**: Prominent start/stop control.

## Technical Requirements
- **Web-Based Implementation**: Ideal for rapid development and testing on iPad without App Store deployment.
- **iPad Optimized**:
  - Full-screen web app capability (PWA/Home screen shortcut).
  - Touch-friendly controls (large dial, distinct buttons).
- **Low Latency Audio**: Utilize Web Audio API for high-precision timing.
- **State Management**: Persist last used tempo and settings locally (LocalStorage).
