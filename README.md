# Solara Atelier

Independent React + Vite website based on the supplied Solara Atelier references.

## Run

npm install
npm run dev -- --port 5195

## Build

npm run build

Output: dist/client (static frontend) plus the included optional Sites worker.

## Included

Home, collection, watch details, craft, story, journal, private viewing experience, and validated demo reservation form. Responsive layouts and keyboard-accessible native dialogs.

Reservations run in memory only. No appointment, email, payment, or backend request is sent. Product prices and specifications are representative concept content from the references, not verified merchandise.

Assets: public/assets/hero.png generated with built-in ImageGen: a bronze watch inside a sandstone crescent, eclipse and desert landscape, dark left space for editable page copy. Collection and craft reference photographs are supplied images displayed within measured photographic bounds. Fonts load from Google Fonts. All project images live in this folder.

## Expanded experience — September 2026

Includes three additional deep-linked pages, new locally stored generated photography, and a real Three.js WebGL product viewer. Drag to orbit, use arrow keys to rotate, change finishes, reveal product layers, pause motion, zoom, and reset the view. Animation respects reduced-motion preferences; a photo fallback is shown when WebGL is unavailable. The models are original procedural design studies, not manufacturing CAD models.

New pages: Design Studio, Materials, Care Guide. New images: desert, movement, atelier, Solstice, Nocturne Chrono, Emerald Tide. Collection includes six watches and working variety filters.

Relative asset paths and hash navigation support GitHub Pages project subpaths. Build with `npm run build`; publish the contents of `dist/client` when ready. These changes have not been deployed by this task.
