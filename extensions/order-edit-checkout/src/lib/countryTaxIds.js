const countryTaxIds = {
  AD: {
    taxIds: [{ value: 'CIF', label: 'Código de Identificación Fiscal (CIF)' }]
  },
  AR: {
    taxIds: [
      {
        value: 'CUIT',
        label: 'Código Único de Identificación Tributaria (CUIT)'
      }
    ]
  },
  AU: {
    taxIds: [
      { value: 'ABN', label: 'Australian Business Number (ABN)' },
      { value: 'TFN', label: 'Tax File Number (TFN)' },
      { value: 'GST', label: 'Goods and Services Tax (GST)' }
    ]
  },
  AT: {
    taxIds: [
      { value: 'UID', label: 'Umsatzsteuer-Identifikationsnummer (UID)' },
      { value: 'Steuernummer', label: 'Tax Number (Steuernummer)' }
    ]
  },
  BE: {
    taxIds: [
      { value: 'VAT', label: 'Value Added Tax (VAT)' },
      { value: 'KBO', label: 'Kruispuntbank van Ondernemingen (KBO)' }
    ]
  },
  BO: {
    taxIds: [
      { value: 'NIT', label: 'Número de Identificación Tributaria (NIT)' }
    ]
  },
  BR: {
    taxIds: [
      { value: 'CNPJ', label: 'Cadastro Nacional da Pessoa Jurídica (CNPJ)' },
      { value: 'CPF', label: 'Cadastro de Pessoas Físicas (CPF)' }
    ]
  },
  BG: {
    taxIds: [{ value: 'VAT', label: 'Value Added Tax (VAT)' }]
  },
  CA: {
    taxIds: [
      { value: 'GST', label: 'Goods and Services Tax (GST)' },
      { value: 'HST', label: 'Harmonized Sales Tax (HST)' },
      { value: 'PST', label: 'Provincial Sales Tax (PST)' }
    ]
  },
  CL: {
    taxIds: [{ value: 'RUT', label: 'Rol Único Tributario (RUT)' }]
  },
  CN: {
    taxIds: [{ value: 'TIN', label: 'Taxpayer Identification Number (TIN)' }]
  },
  CO: {
    taxIds: [
      { value: 'NIT', label: 'Número de Identificación Tributaria (NIT)' }
    ]
  },
  CR: {
    taxIds: [{ value: 'RUC', label: 'Registro Único de Contribuyentes (RUC)' }]
  },
  HR: {
    taxIds: [{ value: 'OIB', label: 'OIB Number (OIB)' }]
  },
  CY: {
    taxIds: [{ value: 'VAT', label: 'Value Added Tax (VAT)' }]
  },
  CZ: {
    taxIds: [{ value: 'DIČ', label: 'Tax Identification Number (DIČ)' }]
  },
  DK: {
    taxIds: [{ value: 'CVR', label: 'CVR Number (CVR)' }]
  },
  DO: {
    taxIds: [
      { value: 'RNC', label: 'Registro Nacional de Contribuyentes (RNC)' }
    ]
  },
  EC: {
    taxIds: [{ value: 'RUC', label: 'Registro Único de Contribuyentes (RUC)' }]
  },
  EG: {
    taxIds: [
      { value: 'TAXID', label: 'Taxpayer Identification Number (TAXID)' }
    ]
  },
  SV: {
    taxIds: [
      { value: 'NIT', label: 'Número de Identificación Tributaria (NIT)' }
    ]
  },
  EE: {
    taxIds: [
      { value: 'KMKR', label: 'Käibemaksukohustuslase Registri Number (KMKR)' }
    ]
  },
  EU: {
    taxIds: [{ value: 'VAT', label: 'Value Added Tax (VAT)' }]
  },
  FI: {
    taxIds: [{ value: 'Y-tunnus', label: 'Business ID (Y-tunnus)' }]
  },
  FR: {
    taxIds: [
      { value: 'SIRET', label: 'SIRET Number' },
      { value: 'TVA', label: 'Taxe sur la Valeur Ajoutée (TVA)' }
    ]
  },
  GE: {
    taxIds: [{ value: 'VAT', label: 'Value Added Tax (VAT)' }]
  },
  DE: {
    taxIds: [
      { value: 'USt-IdNr', label: 'VAT Identification Number (USt-IdNr)' },
      { value: 'SteuerNr', label: 'Tax Identification Number (SteuerNr)' }
    ]
  },
  GR: {
    taxIds: [{ value: 'AFM', label: 'Αριθμός Φορολογικού Μητρώου (AFM)' }]
  },
  HK: {
    taxIds: [{ value: 'BRN', label: 'Business Registration Number (BRN)' }]
  },
  HU: {
    taxIds: [{ value: 'ADÓSZÁM', label: 'Tax Identification Number (ADÓSZÁM)' }]
  },
  IS: {
    taxIds: [
      {
        value: 'Kennitala',
        label: 'National Identification Number (Kennitala)'
      }
    ]
  },
  IN: {
    taxIds: [
      { value: 'PAN', label: 'Permanent Account Number (PAN)' },
      {
        value: 'GSTIN',
        label: 'Goods and Services Tax Identification Number (GSTIN)'
      }
    ]
  },
  ID: {
    taxIds: [{ value: 'NPWP', label: 'Nomor Pokok Wajib Pajak (NPWP)' }]
  },
  IE: {
    taxIds: [
      { value: 'VAT', label: 'Value Added Tax (VAT)' },
      { value: 'TRN', label: 'Tax Registration Number (TRN)' }
    ]
  },
  IL: {
    taxIds: [
      { value: 'VAT', label: 'Value Added Tax (VAT)' },
      { value: 'TIN', label: 'Tax Identification Number (TIN)' }
    ]
  },
  IT: {
    taxIds: [
      { value: 'CodiceFiscale', label: 'Codice Fiscale (Tax Code)' },
      { value: 'PartitaIVA', label: 'Partita IVA (VAT Number)' }
    ]
  },
  JP: {
    taxIds: [
      { value: 'MyNumber', label: 'My Number (Individual Number)' },
      { value: '法人番号', label: 'Corporate Number (法人番号)' }
    ]
  },
  KE: {
    taxIds: [{ value: 'PIN', label: 'Personal Identification Number (PIN)' }]
  },
  LV: {
    taxIds: [{ value: 'PVN', label: 'Value Added Tax Number (PVN)' }]
  },
  LI: {
    taxIds: [
      { value: 'UID', label: 'Umsatzsteuer-Identifikationsnummer (UID)' }
    ]
  },
  LT: {
    taxIds: [{ value: 'PVM', label: 'PVM Number (PVM)' }]
  },
  LU: {
    taxIds: [{ value: 'TVA', label: 'Taxe sur la Valeur Ajoutée (TVA)' }]
  },
  MY: {
    taxIds: [
      { value: 'GST', label: 'Goods and Services Tax (GST)' },
      { value: 'SSM', label: 'Suruhanjaya Syarikat Malaysia (SSM)' }
    ]
  },
  MT: {
    taxIds: [{ value: 'VAT', label: 'Value Added Tax (VAT)' }]
  },
  MX: {
    taxIds: [
      { value: 'RFC', label: 'Registro Federal de Contribuyentes (RFC)' }
    ]
  },
  NL: {
    taxIds: [
      { value: 'BTW', label: 'Belasting over de Toegevoegde Waarde (BTW)' },
      {
        value: 'RSIN',
        label:
          'Rechtspersonen en Samenwerkingsverbanden Informatienummer (RSIN)'
      }
    ]
  },
  NZ: {
    taxIds: [{ value: 'GST', label: 'Goods and Services Tax (GST)' }]
  },
  NO: {
    taxIds: [{ value: 'VAT', label: 'Value Added Tax (VAT)' }]
  },
  PE: {
    taxIds: [{ value: 'RUC', label: 'Registro Único de Contribuyentes (RUC)' }]
  },
  PH: {
    taxIds: [{ value: 'TIN', label: 'Taxpayer Identification Number (TIN)' }]
  },
  PL: {
    taxIds: [{ value: 'NIP', label: 'Numer Identyfikacji Podatkowej (NIP)' }]
  },
  PT: {
    taxIds: [{ value: 'NIF', label: 'Número de Identificação Fiscal (NIF)' }]
  },
  RO: {
    taxIds: [{ value: 'CUI', label: 'Codul Unic de Înregistrare (CUI)' }]
  },
  RU: {
    taxIds: [{ value: 'INN', label: 'Individual Taxpayer Number (INN)' }]
  },
  SA: {
    taxIds: [{ value: 'VAT', label: 'Value Added Tax (VAT)' }]
  },
  RS: {
    taxIds: [{ value: 'PIB', label: 'Poreski Identifikacioni Broj (PIB)' }]
  },
  SG: {
    taxIds: [{ value: 'GST', label: 'Goods and Services Tax (GST)' }]
  },
  SK: {
    taxIds: [{ value: 'DIČ', label: 'Tax Identification Number (DIČ)' }]
  },
  SI: {
    taxIds: [{ value: 'DDV', label: 'Value Added Tax (DDV)' }]
  },
  ZA: {
    taxIds: [
      { value: 'VAT', label: 'Value Added Tax (VAT)' },
      { value: 'TaxRefNo', label: 'Tax Reference Number (TaxRefNo)' }
    ]
  },
  KR: {
    taxIds: [
      {
        value: 'BusinessNumber',
        label: 'Business Registration Number (사업자등록번호)'
      }
    ]
  },
  ES: {
    taxIds: [
      { value: 'NIF', label: 'Número de Identificación Fiscal (NIF)' },
      { value: 'CIF', label: 'Certificado de Identificación Fiscal (CIF)' }
    ]
  },
  SE: {
    taxIds: [{ value: 'VAT', label: 'Value Added Tax (VAT)' }]
  },
  CH: {
    taxIds: [
      { value: 'UID', label: 'Umsatzsteuer-Identifikationsnummer (UID)' }
    ]
  },
  TW: {
    taxIds: [{ value: 'VAT', label: 'Value Added Tax (VAT)' }]
  },
  TR: {
    taxIds: [{ value: 'VKN', label: 'Vergi Kimlik Numarası (VKN)' }]
  },
  UA: {
    taxIds: [{ value: 'EIN', label: 'Employer Identification Number (EIN)' }]
  },
  TH: {
    taxIds: [{ value: 'VAT', label: 'Value Added Tax (VAT)' }]
  },
  AE: {
    taxIds: [{ value: 'TRN', label: 'Tax Registration Number (TRN)' }]
  },
  GB: {
    taxIds: [
      { value: 'UTR', label: 'Unique Taxpayer Reference (UTR)' },
      { value: 'VAT', label: 'Value Added Tax (VAT)' }
    ]
  },
  US: {
    taxIds: [
      { value: 'EIN', label: 'Employer Identification Number (EIN)' },
      { value: 'SSN', label: 'Social Security Number (SSN)' },
      {
        value: 'ITIN',
        label: 'Individual Taxpayer Identification Number (ITIN)'
      }
    ]
  },
  UY: {
    taxIds: [{ value: 'RUT', label: 'Registro Único Tributario (RUT)' }]
  },
  VE: {
    taxIds: [{ value: 'RIF', label: 'Registro de Información Fiscal (RIF)' }]
  },
  VN: {
    taxIds: [{ value: 'TIN', label: 'Taxpayer Identification Number (TIN)' }]
  }
}

export default countryTaxIds
