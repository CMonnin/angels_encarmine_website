# Angels Encarmine

Showcase site for my Angels Encarmine Warhammer 40,000 army: gallery, roster,
painting recipes, and chapter lore. Built with [Astro](https://astro.build),
deployed to GitHub Pages.

## Adding a unit

1. Create `src/content/units/<slug>.md` with frontmatter (`name`, `company`,
   `role`, optional `remarks`, `points`, `models`, `photos`, and `recipe`,
   see an existing unit for the shape). The markdown body is the unit's blurb.
   The roster mirrors `../heraldry.md`; keep the two in sync when markings
   change.
2. Put photos in `src/assets/units/<slug>/` and reference them from the
   `photos` list. Units without photos show a "not yet photographed" card.

The gallery, roster, and recipes pages are all generated from the unit files.

## Commands

| Command           | Action                       |
| ----------------- | ---------------------------- |
| `npm install`     | Install dependencies         |
| `npm run dev`     | Dev server at localhost:4321 |
| `npm run build`   | Build to `./dist/`           |
| `npm run preview` | Preview the build locally    |

Pushing to `main` deploys via GitHub Actions (`.github/workflows/deploy.yml`).
