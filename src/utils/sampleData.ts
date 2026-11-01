import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

export interface SampleRow {
  messageId: string;
  timestamp: string;
  destination: string;
  messageContent: string;
  status: string;
  country: string;
  carrier: string;
}

export function generateFlexSmsSampleRows(): SampleRow[] {
  return [
    // OMAN (+968)
    {
      messageId: 'MSG-892019481',
      timestamp: '2026-10-18 10:14:22',
      destination: '+96891234567',
      messageContent: 'Telegram code: 82910. Use this code to log in. Do not share it.',
      status: 'Failed',
      country: 'Oman',
      carrier: 'Omantel',
    },
    {
      messageId: 'MSG-892019482',
      timestamp: '2026-10-18 10:15:01',
      destination: '96898765432',
      messageContent: 'Your Flex SMS verification code is 49281. Expires in 5 mins.',
      status: 'Undelivered',
      country: 'Oman',
      carrier: 'Ooredoo Oman',
    },
    {
      messageId: 'MSG-892019483',
      timestamp: '2026-10-18 10:16:44',
      destination: '+968 95123456',
      messageContent: 'Telegram 5-digit code: 54321. If you did not request this, ignore.',
      status: 'Rejected',
      country: 'Oman',
      carrier: 'Vodafone Oman',
    },
    {
      messageId: 'MSG-892019484',
      timestamp: '2026-10-18 10:17:12',
      destination: '96891234567', // Duplicate of row 1
      messageContent: 'Login code: 82910 retry attempt.',
      status: 'Failed',
      country: 'Oman',
      carrier: 'Omantel',
    },
    {
      messageId: 'MSG-892019485',
      timestamp: '2026-10-18 10:19:30',
      destination: '+96897654321',
      messageContent: 'Code: 92837. Your authentication passcode.',
      status: 'Expired',
      country: 'Oman',
      carrier: 'Omantel',
    },

    // IVORY COAST (+225)
    {
      messageId: 'MSG-892019486',
      timestamp: '2026-10-18 10:22:15',
      destination: '2250708091011',
      messageContent: 'Votre code de connexion Telegram est: 39482. Ne le partagez pas.',
      status: 'Failed',
      country: 'Ivory Coast',
      carrier: 'Orange CI',
    },
    {
      messageId: 'MSG-892019487',
      timestamp: '2026-10-18 10:23:40',
      destination: '+225 0501020304',
      messageContent: 'Code de vérification: 71920. Valable 10 minutes.',
      status: 'Undelivered',
      country: 'Ivory Coast',
      carrier: 'MTN CI',
    },
    {
      messageId: 'MSG-892019488',
      timestamp: '2026-10-18 10:25:02',
      destination: '+2250102030405',
      messageContent: 'Telegram code: 62819',
      status: 'Failed',
      country: 'Ivory Coast',
      carrier: 'Moov Africa',
    },
    {
      messageId: 'MSG-892019489',
      timestamp: '2026-10-18 10:26:19',
      destination: '2250708091011', // Duplicate of row 6
      messageContent: 'Rappel: Code 39482',
      status: 'Expired',
      country: 'Ivory Coast',
      carrier: 'Orange CI',
    },

    // UZBEKISTAN (+998)
    {
      messageId: 'MSG-892019490',
      timestamp: '2026-10-18 10:28:11',
      destination: '998901234567',
      messageContent: 'Telegram kodi: 18492. Ushbu kodni hech kimga bermang.',
      status: 'Failed',
      country: 'Uzbekistan',
      carrier: 'Beeline UZ',
    },
    {
      messageId: 'MSG-892019491',
      timestamp: '2026-10-18 10:30:05',
      destination: '+998 93 123 4567',
      messageContent: 'Tasdiqlash kodi: 94820. 5 daqiqa davomida amal qiladi.',
      status: 'Undelivered',
      country: 'Uzbekistan',
      carrier: 'Ucell',
    },
    {
      messageId: 'MSG-892019492',
      timestamp: '2026-10-18 10:31:49',
      destination: '+998971234567',
      messageContent: 'Telegram code: 48291. Do not share.',
      status: 'Failed',
      country: 'Uzbekistan',
      carrier: 'Mobiuz',
    },

    // UKRAINE (+380)
    {
      messageId: 'MSG-892019493',
      timestamp: '2026-10-18 10:33:14',
      destination: '380671234567',
      messageContent: 'Код підтвердження Telegram: 74920. Нікому не повідомляйте.',
      status: 'Failed',
      country: 'Ukraine',
      carrier: 'Kyivstar',
    },
    {
      messageId: 'MSG-892019494',
      timestamp: '2026-10-18 10:35:22',
      destination: '+380 50 123 4567',
      messageContent: 'Ваш перевірочний код: 62810.',
      status: 'Rejected',
      country: 'Ukraine',
      carrier: 'Vodafone Ukraine',
    },
    {
      messageId: 'MSG-892019495',
      timestamp: '2026-10-18 10:36:58',
      destination: '+380931234567',
      messageContent: 'Telegram auth code: 31920',
      status: 'Undelivered',
      country: 'Ukraine',
      carrier: 'Lifecell',
    },

    // ISRAEL (+972)
    {
      messageId: 'MSG-892019496',
      timestamp: '2026-10-18 10:38:12',
      destination: '+972562575929',
      messageContent: 'Telegram code: 49201',
      status: 'Failed',
      country: 'Israel',
      carrier: 'Cellcom',
    },
    {
      messageId: 'MSG-892019497',
      timestamp: '2026-10-18 10:39:45',
      destination: '972562575931',
      messageContent: 'Your verification pin is 58192',
      status: 'Failed',
      country: 'Israel',
      carrier: 'Partner',
    },

    // LIBYA (+218)
    {
      messageId: 'MSG-892019498',
      timestamp: '2026-10-18 10:41:00',
      destination: '+218912345678',
      messageContent: 'Telegram code: 85921. رمز التحقق الخاص بك',
      status: 'Failed',
      country: 'Libya',
      carrier: 'Al-Madar',
    },

    // ALGERIA (+213)
    {
      messageId: 'MSG-892019499',
      timestamp: '2026-10-18 10:42:30',
      destination: '+213551234567',
      messageContent: 'Code Telegram: 63910',
      status: 'Undelivered',
      country: 'Algeria',
      carrier: 'Djezzy',
    },

    // BELARUS (+375)
    {
      messageId: 'MSG-892019500',
      timestamp: '2026-10-18 10:44:11',
      destination: '+375291234567',
      messageContent: 'Код Telegram: 92814',
      status: 'Failed',
      country: 'Belarus',
      carrier: 'A1 Belarus',
    },

    // SUDAN (+249)
    {
      messageId: 'MSG-892019501',
      timestamp: '2026-10-18 10:45:50',
      destination: '+249912345678',
      messageContent: 'رمز التيليجرام: 38201',
      status: 'Rejected',
      country: 'Sudan',
      carrier: 'Zain SD',
    },

    // KENYA (+254)
    {
      messageId: 'MSG-892019502',
      timestamp: '2026-10-18 10:47:19',
      destination: '+254712345678',
      messageContent: 'Telegram security code: 49204',
      status: 'Failed',
      country: 'Kenya',
      carrier: 'Safaricom',
    },

    // INDONESIA (+62)
    {
      messageId: 'MSG-892019503',
      timestamp: '2026-10-18 10:49:03',
      destination: '+628123456789',
      messageContent: 'Kode verifikasi Telegram Anda: 61928',
      status: 'Undelivered',
      country: 'Indonesia',
      carrier: 'Telkomsel',
    },

    // MADAGASCAR (+261)
    {
      messageId: 'MSG-892019504',
      timestamp: '2026-10-18 10:50:45',
      destination: '+261321234567',
      messageContent: 'Telegram code: 71940',
      status: 'Failed',
      country: 'Madagascar',
      carrier: 'Orange MG',
    },

    // AZERBAIJAN (+994)
    {
      messageId: 'MSG-892019505',
      timestamp: '2026-10-18 10:52:12',
      destination: '+994501234567',
      messageContent: 'Telegram təsdiq kodu: 82910',
      status: 'Failed',
      country: 'Azerbaijan',
      carrier: 'Azercell',
    },

    // KYRGYZSTAN (+996)
    {
      messageId: 'MSG-892019506',
      timestamp: '2026-10-18 10:53:30',
      destination: '+996555123456',
      messageContent: 'Telegram коду: 39182',
      status: 'Undelivered',
      country: 'Kyrgyzstan',
      carrier: 'MegaCom',
    },

    // BENIN (+229)
    {
      messageId: 'MSG-892019507',
      timestamp: '2026-10-18 10:55:01',
      destination: '+22997123456',
      messageContent: 'Code Telegram: 48192',
      status: 'Failed',
      country: 'Benin',
      carrier: 'MTN Benin',
    },

    // GABON (+241)
    {
      messageId: 'MSG-892019508',
      timestamp: '2026-10-18 10:56:45',
      destination: '+24107123456',
      messageContent: 'Code: 59182',
      status: 'Failed',
      country: 'Gabon',
      carrier: 'Airtel Gabon',
    },

    // HONG KONG (+852)
    {
      messageId: 'MSG-892019509',
      timestamp: '2026-10-18 10:58:10',
      destination: '+85291234567',
      messageContent: 'Telegram verification code: 92814',
      status: 'Undelivered',
      country: 'Hong Kong',
      carrier: 'CSL',
    },

    // UNITED STATES (+1)
    {
      messageId: 'MSG-892019510',
      timestamp: '2026-10-18 11:00:15',
      destination: '+14155552671',
      messageContent: 'Your Telegram login code is 83921. Valid for 10 minutes.',
      status: 'Failed',
      country: 'United States',
      carrier: 'T-Mobile',
    },

    // UNITED KINGDOM (+44)
    {
      messageId: 'MSG-892019511',
      timestamp: '2026-10-18 11:01:40',
      destination: '+447900123456',
      messageContent: 'Telegram verification code: 58291',
      status: 'Failed',
      country: 'United Kingdom',
      carrier: 'Vodafone UK',
    },

    // BANGLADESH (+880)
    {
      messageId: 'MSG-892019512',
      timestamp: '2026-10-18 11:03:00',
      destination: '+8801712345678',
      messageContent: 'আপনার টেলিগ্রাম কোড: 72910',
      status: 'Failed',
      country: 'Bangladesh',
      carrier: 'Grameenphone',
    },
    {
      messageId: 'MSG-892019513',
      timestamp: '2026-10-18 11:04:22',
      destination: '8801712345678', // Duplicate
      messageContent: 'Telegram code: 72910 retry.',
      status: 'Expired',
      country: 'Bangladesh',
      carrier: 'Grameenphone',
    },
  ];
}

/**
 * Download a real sample Excel file named "Flex_SMS_Failed_Report_Sample.xlsx"
 */
export function downloadSampleFlexSmsExcel(): void {
  const rows = generateFlexSmsSampleRows();

  const data = [
    [
      'Message ID',
      'Date & Time',
      'Destination Number',
      'Message Body (SMS)',
      'Delivery Status',
      'Country Name',
      'Carrier Route',
    ],
    ...rows.map((r) => [
      r.messageId,
      r.timestamp,
      r.destination, // Preserve as text
      r.messageContent,
      r.status,
      r.country,
      r.carrier,
    ]),
  ];

  const worksheet = XLSX.utils.aoa_to_sheet(data);

  // Mark column C (Destination Number) as explicit string
  const range = XLSX.utils.decode_range(worksheet['!ref'] || 'A1:G1');
  for (let r = 1; r <= range.e.r; r++) {
    const cellAddress = XLSX.utils.encode_cell({ r, c: 2 });
    const cell = worksheet[cellAddress];
    if (cell) {
      cell.t = 's';
      cell.z = '@';
    }
  }

  worksheet['!cols'] = [
    { wch: 18 }, // ID
    { wch: 20 }, // Time
    { wch: 22 }, // Number
    { wch: 45 }, // Body
    { wch: 15 }, // Status
    { wch: 18 }, // Country
    { wch: 18 }, // Carrier
  ];

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Failed SMS Report');

  const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  const blob = new Blob([excelBuffer], {
    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  });
  saveAs(blob, 'Flex_SMS_Failed_Report_Sample.xlsx');
}

/**
 * Create a File object containing the sample Excel data for instant direct loading
 */
export function createSampleFlexSmsFile(): File {
  const rows = generateFlexSmsSampleRows();

  const data = [
    [
      'Message ID',
      'Date & Time',
      'Destination Number',
      'Message Body (SMS)',
      'Delivery Status',
      'Country Name',
      'Carrier Route',
    ],
    ...rows.map((r) => [
      r.messageId,
      r.timestamp,
      r.destination,
      r.messageContent,
      r.status,
      r.country,
      r.carrier,
    ]),
  ];

  const worksheet = XLSX.utils.aoa_to_sheet(data);
  const range = XLSX.utils.decode_range(worksheet['!ref'] || 'A1:G1');
  for (let r = 1; r <= range.e.r; r++) {
    const cellAddress = XLSX.utils.encode_cell({ r, c: 2 });
    const cell = worksheet[cellAddress];
    if (cell) {
      cell.t = 's';
      cell.z = '@';
    }
  }

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Failed SMS Report');

  const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  const blob = new Blob([excelBuffer], {
    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  });

  return new File([blob], 'Flex_SMS_Failed_Report_Sample.xlsx', {
    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  });
}
