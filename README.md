# Favicon Bundle Maker
Live page: https://aamirtechs.github.io/favicon-bundle-maker/

One logo in, the complete modern favicon bundle out: multi-size ICO, all PNGs, apple-touch-icon, site.webmanifest and the exact head tags. It solves the hand-work of doing this job row by row in a spreadsheet, entirely in the browser.

## Features
- Image, text or emoji input rendered locally via canvas
- Padding, background and corner radius controls
- Outputs: ICO (16/32/48), PNGs 16 to 512, apple-touch-icon and maskable icon
- site.webmanifest and the exact head-tag snippet included
- Live previews at actual size in the ZIP guide

## How it works
Provide the input in the tool card, run it, review the preview, then download the result. All processing happens locally in your browser using the logic in src/logic.js. No server is involved at any step.

## Privacy
Runs 100% in your browser. Your files never leave this device, nothing is uploaded,
and there is no tracking.

## Development
Core logic lives in `src/logic.js` and is shared by the page and the tests.
Run the tests with `npm test`.

## License
MIT, Copyright 2026 Amir Hussain.
