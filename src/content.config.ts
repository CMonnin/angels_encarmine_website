import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { PAINT_RECIPE_ORDER } from './data/paint-recipes';

const units = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/units' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      company: z.string().default('None'),
      role: z.enum([
        'Command',
        'Chaplain',
        'Honor Guard',
        'Death Company',
        'Veteran',
        'Battleline',
        'Close Support',
        'Fire Support',
      ]),
      remarks: z.string().optional(),
      points: z.number().int().nonnegative().optional(),
      models: z.number().int().positive().optional(),
      photos: z
        .array(
          z.object({
            src: image(),
            alt: z.string(),
          }),
        )
        .default([]),
      recipeAreas: z.array(z.enum(PAINT_RECIPE_ORDER as [string, ...string[]])).default([]),
      featured: z.boolean().default(false),
      order: z.number().default(0),
    }),
});

export const collections = { units };
