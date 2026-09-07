# Design QA — Solara Atelier

Source visual truth: supplied 3972910941561726852_31582183788_jpg.jpg (hero), 3972910941561727689_31582183788_jpg.jpg (collection), and craft/design-system references.
Implementation evidence: qa/desktop.png and qa/mobile.png. Browser: Codex in-app browser.
Source: 1440 × 1799. Desktop CSS viewport 1440 × 1100; mobile 390 × 844. Regional comparison of the tall reference against a responsive scrolling implementation, not a pixel-difference assertion. Browser images recorded at reported viewport density.
State: home, collection, Eclipse Core details, reservation form and completion.

## Findings and comparison history
- Initial cover crop clipped the eclipse. Set a bounded desktop hero height and left image alignment. Revised desktop capture shows the complete eclipse and product.
- Initial collection photos cropped watch silhouettes. Applied measured source-photo aspect ratios and per-watch framing. Product metadata remains separate editable HTML.
- Source hero and implementation were emitted together for full composition and focused heading/product comparison.

## Fidelity surfaces
- Typography: Cormorant Garamond display, Inter body; thin serif headlines and spaced wordmark.
- Spacing: spacious nav, left title, right watch, three-product collection, responsive mobile flow. Hero is shorter than the tall source poster to suit desktop browsing.
- Colors: near-black, warm bronze and lunar cream retain the reference's atmosphere.
- Images: regenerated bronze watch, crescent stone and desert/eclipse hero; source photographs used for craft and products. Generated composition differs from the original. Source's continuous collection scenery is adapted into individual photo regions.
- Copy: source headline and collection names retained; descriptions/specifications and representative pricing are concept data.

## Interaction checks
- Collection navigation, Eclipse Core details and close behavior work.
- Details show 42 MM, 10 ATM, sapphire, bronze/onyx and €4,950.
- Reservation validates name, email and date; tested using Preview Guest, preview@example.com and 2026-10-15.
- Submission displays an explicit local-demo confirmation, with no external booking or message.
- Mobile navigation and form fit 390px; no horizontal overflow. No captured console errors.

## Scope and remaining differences
Pass is for a functional responsive interpretation, not exact screenshot fidelity. Fine decorative icons and the original continuous photographic collection layout remain follow-up fidelity work. No booking service, commerce backend or data persistence.

final result: passed

## Expansion verification

Production build passed. All four existing packaging/worker tests passed. Production CSS image paths resolve to existing files without root-relative URLs. Browser inspection confirmed a rendered WebGL model and no console errors. Material and exploded-view controls were exercised. Coffee studio and Solara collection were checked at 390px with no horizontal overflow; Solara new-expression filtering correctly shows three distinct watches. This verifies the local implementation; hosted GitHub Pages was not redeployed or rechecked.
