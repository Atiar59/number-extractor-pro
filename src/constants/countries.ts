// Country metadata helper with emoji flags, ISO codes, and full English names

export interface CountryMeta {
  code: string;
  name: string;
  dialCode: string;
  flag: string;
}

export const COUNTRIES_META: Record<string, CountryMeta> = {
  OM: { code: 'OM', name: 'Oman', dialCode: '+968', flag: '🇴🇲' },
  CI: { code: 'CI', name: 'Ivory Coast', dialCode: '+225', flag: '🇨🇮' },
  UZ: { code: 'UZ', name: 'Uzbekistan', dialCode: '+998', flag: '🇺🇿' },
  UA: { code: 'UA', name: 'Ukraine', dialCode: '+380', flag: '🇺🇦' },
  IL: { code: 'IL', name: 'Israel', dialCode: '+972', flag: '🇮🇱' },
  LY: { code: 'LY', name: 'Libya', dialCode: '+218', flag: '🇱🇾' },
  DZ: { code: 'DZ', name: 'Algeria', dialCode: '+213', flag: '🇩🇿' },
  BY: { code: 'BY', name: 'Belarus', dialCode: '+375', flag: '🇧🇾' },
  SD: { code: 'SD', name: 'Sudan', dialCode: '+249', flag: '🇸🇩' },
  KE: { code: 'KE', name: 'Kenya', dialCode: '+254', flag: '🇰🇪' },
  ID: { code: 'ID', name: 'Indonesia', dialCode: '+62', flag: '🇮🇩' },
  MG: { code: 'MG', name: 'Madagascar', dialCode: '+261', flag: '🇲🇬' },
  AZ: { code: 'AZ', name: 'Azerbaijan', dialCode: '+994', flag: '🇦🇿' },
  KG: { code: 'KG', name: 'Kyrgyzstan', dialCode: '+996', flag: '🇰🇬' },
  BJ: { code: 'BJ', name: 'Benin', dialCode: '+229', flag: '🇧🇯' },
  GA: { code: 'GA', name: 'Gabon', dialCode: '+241', flag: '🇬🇦' },
  HK: { code: 'HK', name: 'Hong Kong', dialCode: '+852', flag: '🇭🇰' },
  US: { code: 'US', name: 'United States', dialCode: '+1', flag: '🇺🇸' },
  GB: { code: 'GB', name: 'United Kingdom', dialCode: '+44', flag: '🇬🇧' },
  BD: { code: 'BD', name: 'Bangladesh', dialCode: '+880', flag: '🇧🇩' },
  IN: { code: 'IN', name: 'India', dialCode: '+91', flag: '🇮🇳' },
  PK: { code: 'PK', name: 'Pakistan', dialCode: '+92', flag: '🇵🇰' },
  NG: { code: 'NG', name: 'Nigeria', dialCode: '+234', flag: '🇳🇬' },
  SA: { code: 'SA', name: 'Saudi Arabia', dialCode: '+966', flag: '🇸🇦' },
  AE: { code: 'AE', name: 'United Arab Emirates', dialCode: '+971', flag: '🇦🇪' },
  QA: { code: 'QA', name: 'Qatar', dialCode: '+974', flag: '🇶🇦' },
  KW: { code: 'KW', name: 'Kuwait', dialCode: '+965', flag: '🇰🇼' },
  BH: { code: 'BH', name: 'Bahrain', dialCode: '+973', flag: '🇧🇭' },
  TR: { code: 'TR', name: 'Turkey', dialCode: '+90', flag: '🇹🇷' },
  EG: { code: 'EG', name: 'Egypt', dialCode: '+20', flag: '🇪🇬' },
  ZA: { code: 'ZA', name: 'South Africa', dialCode: '+27', flag: '🇿🇦' },
  RU: { code: 'RU', name: 'Russia', dialCode: '+7', flag: '🇷🇺' },
  KZ: { code: 'KZ', name: 'Kazakhstan', dialCode: '+7', flag: '🇰🇿' },
  FR: { code: 'FR', name: 'France', dialCode: '+33', flag: '🇫🇷' },
  DE: { code: 'DE', name: 'Germany', dialCode: '+49', flag: '🇩🇪' },
  IT: { code: 'IT', name: 'Italy', dialCode: '+39', flag: '🇮🇹' },
  ES: { code: 'ES', name: 'Spain', dialCode: '+34', flag: '🇪🇸' },
  BR: { code: 'BR', name: 'Brazil', dialCode: '+55', flag: '🇧🇷' },
  CA: { code: 'CA', name: 'Canada', dialCode: '+1', flag: '🇨🇦' },
  AU: { code: 'AU', name: 'Australia', dialCode: '+61', flag: '🇦🇺' },
  MY: { code: 'MY', name: 'Malaysia', dialCode: '+60', flag: '🇲🇾' },
  PH: { code: 'PH', name: 'Philippines', dialCode: '+63', flag: '🇵🇭' },
  SG: { code: 'SG', name: 'Singapore', dialCode: '+65', flag: '🇸🇬' },
  TH: { code: 'TH', name: 'Thailand', dialCode: '+66', flag: '🇹🇭' },
  VN: { code: 'VN', name: 'Vietnam', dialCode: '+84', flag: '🇻🇳' },
  GH: { code: 'GH', name: 'Ghana', dialCode: '+233', flag: '🇬🇭' },
  MA: { code: 'MA', name: 'Morocco', dialCode: '+212', flag: '🇲🇦' },
  TN: { code: 'TN', name: 'Tunisia', dialCode: '+216', flag: '🇹🇳' },
  IQ: { code: 'IQ', name: 'Iraq', dialCode: '+964', flag: '🇮🇶' },
  JO: { code: 'JO', name: 'Jordan', dialCode: '+962', flag: '🇯🇴' },
  LB: { code: 'LB', name: 'Lebanon', dialCode: '+961', flag: '🇱🇧' },
  SY: { code: 'SY', name: 'Syria', dialCode: '+963', flag: '🇸🇾' },
  YE: { code: 'YE', name: 'Yemen', dialCode: '+967', flag: '🇾🇪' },
  AF: { code: 'AF', name: 'Afghanistan', dialCode: '+93', flag: '🇦🇫' },
  NP: { code: 'NP', name: 'Nepal', dialCode: '+977', flag: '🇳🇵' },
  LK: { code: 'LK', name: 'Sri Lanka', dialCode: '+94', flag: '🇱🇰' },
  MM: { code: 'MM', name: 'Myanmar', dialCode: '+95', flag: '🇲🇲' },
  KH: { code: 'KH', name: 'Cambodia', dialCode: '+855', flag: '🇰🇭' },
  TJ: { code: 'TJ', name: 'Tajikistan', dialCode: '+992', flag: '🇹🇯' },
  TM: { code: 'TM', name: 'Turkmenistan', dialCode: '+993', flag: '🇹🇲' },
  GE: { code: 'GE', name: 'Georgia', dialCode: '+995', flag: '🇬🇪' },
  AM: { code: 'AM', name: 'Armenia', dialCode: '+374', flag: '🇦🇲' },
  MD: { code: 'MD', name: 'Moldova', dialCode: '+373', flag: '🇲🇩' },
  RO: { code: 'RO', name: 'Romania', dialCode: '+40', flag: '🇷🇴' },
  PL: { code: 'PL', name: 'Poland', dialCode: '+48', flag: '🇵🇱' },
  NL: { code: 'NL', name: 'Netherlands', dialCode: '+31', flag: '🇳🇱' },
  BE: { code: 'BE', name: 'Belgium', dialCode: '+32', flag: '🇧🇪' },
  SE: { code: 'SE', name: 'Sweden', dialCode: '+46', flag: '🇸🇪' },
  NO: { code: 'NO', name: 'Norway', dialCode: '+47', flag: '🇳🇴' },
  DK: { code: 'DK', name: 'Denmark', dialCode: '+45', flag: '🇩🇰' },
  FI: { code: 'FI', name: 'Finland', dialCode: '+358', flag: '🇫🇮' },
  AT: { code: 'AT', name: 'Austria', dialCode: '+43', flag: '🇦🇹' },
  CH: { code: 'CH', name: 'Switzerland', dialCode: '+41', flag: '🇨🇭' },
  PT: { code: 'PT', name: 'Portugal', dialCode: '+351', flag: '🇵🇹' },
  GR: { code: 'GR', name: 'Greece', dialCode: '+30', flag: '🇬🇷' },
  CZ: { code: 'CZ', name: 'Czech Republic', dialCode: '+420', flag: '🇨🇿' },
  HU: { code: 'HU', name: 'Hungary', dialCode: '+36', flag: '🇭🇺' },
  SK: { code: 'SK', name: 'Slovakia', dialCode: '+421', flag: '🇸🇰' },
  BG: { code: 'BG', name: 'Bulgaria', dialCode: '+359', flag: '🇧🇬' },
  RS: { code: 'RS', name: 'Serbia', dialCode: '+381', flag: '🇷🇸' },
  HR: { code: 'HR', name: 'Croatia', dialCode: '+385', flag: '🇭🇷' },
  BA: { code: 'BA', name: 'Bosnia and Herzegovina', dialCode: '+387', flag: '🇧🇦' },
  AL: { code: 'AL', name: 'Albania', dialCode: '+355', flag: '🇦🇱' },
  MK: { code: 'MK', name: 'North Macedonia', dialCode: '+389', flag: '🇲🇰' },
  SI: { code: 'SI', name: 'Slovenia', dialCode: '+386', flag: '🇸🇮' },
  IE: { code: 'IE', name: 'Ireland', dialCode: '+353', flag: '🇮🇪' },
  NZ: { code: 'NZ', name: 'New Zealand', dialCode: '+64', flag: '🇳🇿' },
  MX: { code: 'MX', name: 'Mexico', dialCode: '+52', flag: '🇲🇽' },
  CO: { code: 'CO', name: 'Colombia', dialCode: '+57', flag: '🇨🇴' },
  AR: { code: 'AR', name: 'Argentina', dialCode: '+54', flag: '🇦🇷' },
  CL: { code: 'CL', name: 'Chile', dialCode: '+56', flag: '🇨🇱' },
  PE: { code: 'PE', name: 'Peru', dialCode: '+51', flag: '🇵🇪' },
  VE: { code: 'VE', name: 'Venezuela', dialCode: '+58', flag: '🇻🇪' },
  EC: { code: 'EC', name: 'Ecuador', dialCode: '+593', flag: '🇪🇨' },
  GT: { code: 'GT', name: 'Guatemala', dialCode: '+502', flag: '🇬🇹' },
  CU: { code: 'CU', name: 'Cuba', dialCode: '+53', flag: '🇨🇺' },
  ET: { code: 'ET', name: 'Ethiopia', dialCode: '+251', flag: '🇪🇹' },
  TZ: { code: 'TZ', name: 'Tanzania', dialCode: '+255', flag: '🇹🇿' },
  UG: { code: 'UG', name: 'Uganda', dialCode: '+256', flag: '🇺🇬' },
  CM: { code: 'CM', name: 'Cameroon', dialCode: '+237', flag: '🇨🇲' },
  SN: { code: 'SN', name: 'Senegal', dialCode: '+221', flag: '🇸🇳' },
  ZW: { code: 'ZW', name: 'Zimbabwe', dialCode: '+263', flag: '🇿🇼' },
  ZM: { code: 'ZM', name: 'Zambia', dialCode: '+260', flag: '🇿🇲' },
  AO: { code: 'AO', name: 'Angola', dialCode: '+244', flag: '🇦🇴' },
  MZ: { code: 'MZ', name: 'Mozambique', dialCode: '+258', flag: '🇲🇿' },
};

export function getCountryFlag(countryCode?: string): string {
  if (!countryCode) return '🌐';
  const upper = countryCode.toUpperCase();
  if (COUNTRIES_META[upper]) {
    return COUNTRIES_META[upper].flag;
  }
  // Convert 2-letter ISO code to regional indicator symbol flags
  if (upper.length === 2) {
    const codePoints = [...upper].map(c => 127397 + c.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
  }
  return '🌐';
}

export function getCountryName(countryCode?: string): string {
  if (!countryCode) return 'International / Unknown';
  const upper = countryCode.toUpperCase();
  return COUNTRIES_META[upper]?.name || upper;
}

export function getCountryDialCode(countryCode?: string): string {
  if (!countryCode) return '';
  const upper = countryCode.toUpperCase();
  return COUNTRIES_META[upper]?.dialCode || '';
}
