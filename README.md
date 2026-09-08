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

## Single-page scrolling update

All nine sections stay mounted in one continuous page. Header navigation scrolls to section anchors, highlights the section currently in view, and closes the mobile menu after selection. Existing hash links still open the corresponding section. Reduced-motion preferences disable smooth scrolling.

All six collection watches are selectable in the Design Studio. Each collection card has a link that selects its model and scrolls to the viewer. Models vary by dial, strap, size, case, and details (mesh GMT, bracelet chronograph, ivory dress dial, or emerald dive bezel). The hour, minute, and second hands follow the device-local clock; the GMT hand follows UTC. Pausing the decorative orbit does not stop the clock. Chronograph subdials are decorative design details, not a stopwatch.

Clock checks: `node --test tests/watch-time.test.mjs`.
