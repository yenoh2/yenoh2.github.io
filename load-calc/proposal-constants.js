/**
 * Proposal & Bid Builder — Constants & Catalog Data
 * Equipment catalogs, IAQ products, misc pricing, financing, and rebate options.
 * All data extracted from the Proposal, Pricing, Bid, and Ma sheets.
 */

// ═══════════════════════════════════════════════════════════════
// FINANCIAL CONSTANTS
// ═══════════════════════════════════════════════════════════════

export const SALES_TAX_RATE = 0.07685;
export const FURNACE_PROFIT_MARGIN = 0.47;
export const AC_PROFIT_MARGIN = 0.47;
export const ELECTRICITY_RATE = 0.085;  // $/kWh
export const GAS_PRICE = 10.821;        // $/decatherm
export const OPERATING_HOURS = 1800;    // hours/year
export const LABOR_RATE = 50;           // $/hour

// ═══════════════════════════════════════════════════════════════
// SALE TYPES
// ═══════════════════════════════════════════════════════════════

export const SALE_TYPES = [
  { id: 'furnaceAndAC', label: 'Furnace & A/C' },
  { id: 'furnaceOnly', label: 'Furnace Only' },
  { id: 'acOnly', label: 'A/C Only' },
];

// ═══════════════════════════════════════════════════════════════
// EQUIPMENT CATALOG
// The full 660+ item catalog is loaded from equipment-catalog.json
// by the catalog-picker.js module. No hardcoded slots needed.
// ═══════════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════════
// IAQ (Indoor Air Quality) PRODUCT CATALOG
// ═══════════════════════════════════════════════════════════════

export const IAQ_CATALOG = [
  // Humidifiers
  { id: 'iaq1',  name: 'Healthy Climate WB2-12 Humidifier',                     price: 400,  annualCost: 20, category: 'humidifier' },
  { id: 'iaq2',  name: 'Healthy Climate/Aprilaire Humidifier',                  price: 425,  annualCost: 20, category: 'humidifier' },
  { id: 'iaq3',  name: 'Healthy Climate/Aprilaire Power Humidifier',            price: 525,  annualCost: 20, category: 'humidifier' },
  { id: 'iaq4',  name: 'York HU12MB Humidifier',                               price: 400,  annualCost: 20, category: 'humidifier' },
  { id: 'iaq5',  name: 'York HU17MB Humidifier',                               price: 425,  annualCost: 20, category: 'humidifier' },
  { id: 'iaq6',  name: 'York HU18MB Power Humidifier',                          price: 525,  annualCost: 20, category: 'humidifier' },
  { id: 'iaq7',  name: 'Honeywell True Steam HM506H Steam Humidifier',          price: 1165, annualCost: 20, category: 'humidifier' },
  { id: 'iaq8',  name: 'Honeywell True Steam HM509H Steam Humidifier',          price: 1320, annualCost: 20, category: 'humidifier' },
  { id: 'iaq9',  name: 'Honeywell True Steam HM506VPIAQ Steam Humidifier',      price: 1480, annualCost: 20, category: 'humidifier' },
  { id: 'iaq10', name: 'Honeywell True Steam HM509VPIAQ Steam Humidifier',      price: 1520, annualCost: 20, category: 'humidifier' },
  { id: 'iaq11', name: 'Honeywell True Steam HM512VPIAQ Steam Humidifier',      price: 1620, annualCost: 20, category: 'humidifier' },
  // Filters
  { id: 'iaq12', name: 'Healthy Climate HCC16-28 Merv 11 Filter',               price: 425,  annualCost: 45,  category: 'filter' },
  { id: 'iaq13', name: 'Healthy Climate HCC20-28 Merv 11 Filter',               price: 425,  annualCost: 45,  category: 'filter' },
  { id: 'iaq14', name: 'Healthy Climate HCC16-28 Merv 16 Filter',               price: 485,  annualCost: 115, category: 'filter' },
  { id: 'iaq15', name: 'Healthy Climate HCC20-28 Merv 16 Filter',               price: 485,  annualCost: 115, category: 'filter' },
  // Air Purification
  { id: 'iaq16', name: 'Healthy Climate PCO14-23 PureAir Air Purification System', price: 1285, annualCost: 250, category: 'purifier' },
  { id: 'iaq17', name: 'Healthy Climate PCO16-28 PureAir Air Purification System', price: 1285, annualCost: 250, category: 'purifier' },
  { id: 'iaq18', name: 'Healthy Climate PCO20-28 PureAir Air Purification System', price: 1285, annualCost: 250, category: 'purifier' },
  { id: 'iaq19', name: 'York Affinity Hybrid Electronic Air Cleaner',             price: 1025, annualCost: 55,  category: 'purifier' },
  { id: 'iaq20', name: 'York Merv 16 Filter',                                     price: 485,  annualCost: 115, category: 'filter' },
];

// ═══════════════════════════════════════════════════════════════
// MISCELLANEOUS PRICING ITEMS
// Used in rows 18-20 of each option column
// ═══════════════════════════════════════════════════════════════

export const MISC_ITEMS = [
  { id: 'misc1',  name: 'Save Plan Full Service Maintenance',              price: 72.50,  isDiscount: false },
  { id: 'misc2',  name: '10 year parts and labor extended warranty',        price: 390,    isDiscount: false },
  { id: 'misc3',  name: '10 year labor extended warranty',                  price: 158,    isDiscount: false },
  { id: 'misc4',  name: 'Furnace & A/C System Discount',                   price: 200,    isDiscount: true },
  { id: 'misc5',  name: 'Manufacturer Rebate',                             price: 0,      isDiscount: true },
  { id: 'misc6',  name: 'Cash Discount',                                   price: 0,      isDiscount: true },
  { id: 'misc7',  name: 'Senior Discount',                                 price: 0,      isDiscount: true },
  { id: 'misc8',  name: 'Credit Service Call',                             price: 0,      isDiscount: true },
  { id: 'misc9',  name: 'Promotional Offer - Free Humidifier',             price: 0,      isDiscount: true },
  { id: 'misc10', name: 'Promotional Offer - Free High Efficient Filter',  price: 0,      isDiscount: true },
  { id: 'misc11', name: 'Promotional Offer',                               price: 0,      isDiscount: true },
];

// ═══════════════════════════════════════════════════════════════
// THERMOSTAT OPTIONS
// ═══════════════════════════════════════════════════════════════

export const THERMOSTAT_OPTIONS = [
  { id: 'stat0', name: 'Use Existing Thermostat',                        price: 0 },
  { id: 'stat1', name: 'iComfort S30 Programmable Thermostat',            price: 0 },
  { id: 'stat2', name: 'Comfortsense Programmable Thermostat',            price: 0 },
  { id: 'stat3', name: 'Honeywell Digital Non-Programmable Thermostat',   price: 0 },
  { id: 'stat4', name: 'Honeywell Programmable Thermostat',               price: 0 },
  { id: 'stat5', name: 'Touch Screen Programmable Thermostat',            price: 0 },
  { id: 'stat6', name: 'Touch Screen 2-Stage Programmable Thermostat',    price: 0 },
];

// ═══════════════════════════════════════════════════════════════
// WARRANTY OPTIONS
// ═══════════════════════════════════════════════════════════════

export const WARRANTY_OPTIONS = [
  { id: 'war0', name: 'None',                            price: 0 },
  { id: 'war1', name: '5 yr Parts & Labor Warranty',     price: 0 },
  { id: 'war2', name: '10 yr Parts Warranty',            price: 0 },
  { id: 'war3', name: '10 yr Parts & Labor Warranty',    price: 0 },
  { id: 'war4', name: '12 yr Parts & Labor Warranty',    price: 0 },
];

// ═══════════════════════════════════════════════════════════════
// PAYMENT / FINANCING OPTIONS
// ═══════════════════════════════════════════════════════════════

export const PAYMENT_OPTIONS = [
  { id: 'pay0',  name: 'Cash on Completion',             factor: null,   isFinancing: false },
  { id: 'pay1',  name: 'Financing @ 0% For 6 Months',    factor: 0.167,  isFinancing: true },
  { id: 'pay2',  name: 'Financing @ 0% For 12 Months',   factor: 0.0834, isFinancing: true },
  { id: 'pay3',  name: 'Financing @ 0% For 18 Months',   factor: 0.0556, isFinancing: true },
  { id: 'pay4',  name: 'Financing @ 5.9%',               factor: 0.02,   isFinancing: true },
  { id: 'pay5',  name: 'Financing @ 6.9%',               factor: 0.02,   isFinancing: true },
  { id: 'pay6',  name: 'Financing @ 9.9%',               factor: 0.0125, isFinancing: true },
  { id: 'pay7',  name: 'Financing @ 7.99%',              factor: 0.0125, isFinancing: true },
  { id: 'pay8',  name: 'Financing @ 9.99%',              factor: 0.0125, isFinancing: true },
  { id: 'pay9',  name: 'VISA',                           factor: null,   isFinancing: false },
  { id: 'pay10', name: 'Mastercard',                     factor: null,   isFinancing: false },
  { id: 'pay11', name: 'American Express',               factor: null,   isFinancing: false },
  { id: 'pay12', name: 'Discover',                       factor: null,   isFinancing: false },
];

// ═══════════════════════════════════════════════════════════════
// REBATE CATEGORIES
// ═══════════════════════════════════════════════════════════════

export const REBATE_CATEGORIES = [
  { id: 'reb1', name: 'Rocky Mountain Power Rebate' },
  { id: 'reb2', name: 'Federal Tax Credit' },
  { id: 'reb3', name: 'Federal Tax Credit & State Tax Rebate' },
  { id: 'reb4', name: 'Enbridge Rebate' },
  { id: 'reb5', name: 'Enbridge & Rocky Mountain Power Rebates' },
];

// ═══════════════════════════════════════════════════════════════
// INSTALLATION FEATURES (checklist for proposal)
// ═══════════════════════════════════════════════════════════════

export const GUARANTEES = [
  '100% Satisfaction Guarantee',
  'Questar Green Sticker Certification',
  'RMGA, EPA, ISL and NATE Certified Technicians',
  'Fully Licensed, Insured & Bonded',
  'Drug Free Workplace',
];

export const CUSTOMER_BENEFITS = [
  'Respect for your home and property',
  'Improved Comfort',
  'Lower Utility Usage',
  'OVER 120 YEARS COMBINED EXPERIENCE',
];

export const INSTALLATION_FEATURES_AC = [
  'Condenser',
  'Indoor Cooling Coil',
  'Refrigeration Lines',
  'Condenser Pad',
  'Electrical Wiring',
  'Programmable Thermostat',
  'ARI certified SEER ratings',
];

export const INSTALLATION_FEATURES_FURNACE = [
  'Furnace',
  'Duct System',
  'Insulated Duct System',
  'High Efficient Furnace Flue',
  'Bring 80% Furnace Flue To Code',
  'External Filter Rack',
  'Reconnect to Existing Ducting',
  'Install Turning Vanes',
  'Insulate Ducting',
  'Seal Ducting',
];

export const INSTALLATION_FEATURES_GENERAL = [
  'Remove/Dispose of Existing Equipment',
  'Complete Clean Up',
  'Condensate Pump',
  'Condensate Drain',
  'Flex Gas Connector with Shutoff',
  'Add Outside Combustion Air',
  'Wiring',
  'Electrical / Disconnect',
  'A/C Storage Cover',
  'Installation',
  'Fire, Charge & Test Equipment',
  'Labor',
  'Sales Tax',
];

// ═══════════════════════════════════════════════════════════════
// DEFAULT COMPANY PROFILE
// ═══════════════════════════════════════════════════════════════

export const DEFAULT_COMPANY_PROFILE = {
  companyName: 'Alta Air',
  advisorName: 'Matt Flitton',
  phone: '',
  cellPhone: '(801) 675-6499',
  email: '',
  address: '',
  address2: '',
};
