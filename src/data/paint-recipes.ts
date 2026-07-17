export interface PaintRecipe {
  slug: string;
  label: string;
  /** Overrides the army-wide "prime Black" default when the area needs a different base. */
  primer?: string;
  steps: string[];
}

export const PAINT_RECIPES = {
  red: {
    slug: 'red',
    label: 'Red Armour',
    steps: [
      'Airbrush: Scarlet Red (Scale75)',
      'Glaze highlight: Mayhem Red (Scale75)',
      'Glaze shadows: Black Leather (Scale75)',
      'Glaze 2nd highlight: 50/50 Mayhem Red (Scale75) / Orange Brown (Vallejo)',
      'Glaze: Orange Brown (Vallejo)',
      'Edge highlight: Orange Brown (Vallejo)',
    ],
  },
  black: {
    slug: 'black',
    label: 'Black',
    steps: [
      'Flat Black (Scale75)',
      '50/50 Flat Black (Scale75) / Miskatonic Grey (Scale75)',
      'Highlight: Miskatonic Grey (Scale75)',
    ],
  },
  metal: {
    slug: 'metal',
    label: 'Metal',
    steps: ['Leadbelcher', 'Oil wash: Abteilung Sepia'],
  },
  yellow: {
    slug: 'yellow',
    label: 'Yellow (helmet marking)',
    steps: [
      '50/50 Flat Yellow (Vallejo) / Orange Brown (Vallejo)',
      'Wash: Acrylic Sepia or Nazdreg Yellow',
      'Highlight: Ice Yellow (Vallejo)',
    ],
  },
  gold: {
    slug: 'gold',
    label: 'Gold Trim',
    steps: [
      'Rich Gold (Pro Acryl)',
      'Glaze: Citrine Alchemy (Scale75)',
      'Edge highlight: Aluminium (AK Interactive)',
    ],
  },
  gems: {
    slug: 'gems',
    label: 'Gems',
    steps: [
      'Base: Black',
      'Deep Red (Scale75)',
      'Mayhem Red (Scale75)',
      'Troll Slayer Orange',
      'Glaze: Lugganath Orange',
      'Pinpoint highlight: Dead White',
    ],
  },
  'white-sanguinary-guard': {
    slug: 'white-sanguinary-guard',
    label: 'White Armour (Sanguinary Guard)',
    primer: 'Grey Seer',
    steps: [
      'Layer: Pallid Wych Flesh',
      'Highlight: Dead White',
      'Pin wash: brown oil paint',
    ],
  },
  'white-death-company': {
    slug: 'white-death-company',
    label: 'White Armour (Death Company)',
    primer: 'Grey Seer',
    steps: [
      'Layer: Pallid Wych Flesh',
      'Highlight: Dead White',
      'Wash: Abteilung Sepia',
      'Dried blood: stipple Rhinox Hide, then Skrag Brown',
    ],
  },
} as const satisfies Record<string, PaintRecipe>;

export type PaintRecipeSlug = keyof typeof PAINT_RECIPES;

export const PAINT_RECIPE_ORDER: PaintRecipeSlug[] = [
  'red',
  'black',
  'metal',
  'yellow',
  'gold',
  'gems',
  'white-sanguinary-guard',
  'white-death-company',
];

/** Every model is primed Black before painting unless its area specifies its own primer. */
export const DEFAULT_PRIMER = 'Black';
