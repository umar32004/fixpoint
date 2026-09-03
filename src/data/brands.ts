export interface Brand {
  id: string
  name: string
  category: string
  description: string
  models: string[]
}

export const brands: Brand[] = [
  {
    id: 'zero',
    name: 'ZERO',
    category: 'Lifestyle',
    description:
      'Repair requests for ZERO lifestyle earbuds, including current and commonly listed ZBuds models.',
    models: [
      'Gravity',
      'Rover Pro',
      'Wave',
      'Evo',
      'Aura',
      'Vibe',
      'Z 811',
      'Display',
      'Quantum',
      'Carbon',
      'Fusion',
      'Flair',
      'Aero',
      'Crystal',
      'Klarity',
      'Wave Neo',
      'Other Model',
    ],
  },
  {
    id: 'audionic',
    name: 'Audionic',
    category: 'Airbud / Trance',
    description:
      'Repair requests for Audionic wireless earbuds, Airbud, Battlebuds and Trance ranges.',
    models: [
      'Airbud 425',
      'Airbud 550',
      'Airbud 595',
      'Airbud 690 ION',
      'Airbud 730',
      'Airbud 735 ION',
      'Battlebuds',
      'Battlebuds Lite',
      'Battlebuds Prime',
      'Battlebuds Pro',
      'Battlebuds NEO',
      'Trance 810',
      'Trance 815',
      'Trance 820',
      'Trance 850',
      'Other Model',
    ],
  },
  {
    id: 'techhunk',
    name: 'Tech Hunk',
    category: 'TH Earbuds',
    description:
      'Repair requests for Tech Hunk earbuds, including TH Pods and the current TH lineup.',
    models: [
      'TH Pods Gen 5',
      'TH Gen-Z',
      'TH Pods Gen 3',
      'TH Nano',
      'TH Flex',
      'TH Steel X',
      'TH Flick',
      'TH Crystal',
      'TH Sonic',
      'TH MuteX',
      'Other Model',
    ],
  },
]

export const brandFormOptions = [...brands.map((b) => b.name), 'Other']

export function getModelsForBrand(brandName: string): string[] {
  const brand = brands.find((b) => b.name === brandName)
  if (!brand) return ['Other Model']
  return brand.models
}
