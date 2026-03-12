# Transcribe

A client-side audio transcription tool powered by OpenAI's Whisper API. No server, no accounts — your API key never leaves your browser.

## Features

- Drag-and-drop audio upload (mp3, m4a, wav, ogg, flac, webm, mp4)
- Timestamped output — paragraphs break on natural speech pauses with `[M:SS]` markers
- Automatic handling of large files: resamples to 16 kHz mono and chunks into 10-minute segments
- Copy to clipboard or download as `.txt`

## Usage

1. Open `index.html` in any modern browser (or serve via GitHub Pages / Netlify / Vercel)
2. Paste your [OpenAI API key](https://platform.openai.com/api-keys) into the key field
3. Drop or select an audio file
4. Click **Transcribe**

## Deploy

**GitHub Pages** — push this folder to a repo, go to Settings → Pages, and set the source to the root of your main branch. The tool will be live at `https://yourusername.github.io/repo-name/`.

**As a subpage** — drop this folder into your existing site at any path (e.g. `yoursite.com/transcribe/`). No build step needed.

## Theming

All design tokens (colors, fonts) live at the top of `styles.css` inside the `:root` block, clearly marked. Swap those values to match your site's design system.

## Privacy

All API requests go directly from your browser to `api.openai.com`. No data passes through any intermediary server.
