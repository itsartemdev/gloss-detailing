export const site = {
  brand: 'GLOSS',
  tagline: 'DETAILING STUDIO',
  legalName: 'GLOSS Detailing Studio',
  shortName: 'GLOSS',
  phone: '+74950000000',
  phoneDisplay: '+7 (495) 000-00-00',
  email: 'studio@gloss-detailing.ru',
  instagram: 'https://instagram.com',
  address: {
    street: 'ул. Складочная, 1, стр. 18',
    city: 'Москва',
    postal: '127018',
  },
  hours: [
    { days: 'Пн–Пт', time: '8:00–18:00' },
    { days: 'Сб', time: '9:00–14:00' },
  ],
  geo: { lat: 55.7993, lng: 37.5944 },
  mapQuery: 'Москва, ул. Складочная, 1',
  taxId: 'ИНН 7700000000',
  year: 2026,
} as const

export const fullAddress = `${site.address.street}, ${site.address.city}`
export const privacyPath = '/politika-konfidencialnosti'
export const mapOpenUrl = `https://yandex.ru/maps/?ll=${site.geo.lng}%2C${site.geo.lat}&z=17&text=${encodeURIComponent(site.mapQuery)}`

export const mapEmbedUrl = `https://yandex.ru/map-widget/v1/?ll=${site.geo.lng}%2C${site.geo.lat}&z=16&mode=search&text=${encodeURIComponent(site.mapQuery)}`

