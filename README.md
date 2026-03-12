# Transcribe

Audio transcription tool powered by OpenAI's Whisper API. Drop a file, click Transcribe — no accounts or API keys required from users.

## Features

- Drag-and-drop audio upload (mp3, m4a, wav, ogg, flac, webm, mp4)
- Timestamped output — paragraphs break on natural speech pauses with `[M:SS]` markers
- Automatic handling of large files: resamples to 16 kHz mono and chunks into 2-minute segments
- Copy to clipboard or download as `.txt`

## Usage

1. Drop or select an audio file
2. Click **Transcribe**

That's it. The API key is configured on the server — users never see or need one.

## Deploy to Vercel

1. Push this repo to GitHub (already done)
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import the repo
3. After deploy, go to **Settings → Environment Variables**
4. Add: `OPENAI_API_KEY` = your key from [platform.openai.com/api-keys](https://platform.openai.com/api-keys)
5. Click **Redeploy** (env vars require a redeploy to take effect)

The site will be live at `https://your-project.vercel.app`.

> **Note:** Files under 4 MB are sent to Whisper directly. Larger files are decoded and split into 2-minute WAV chunks before sending. A 1-hour recording becomes ~30 sequential API calls — plan accordingly for OpenAI costs.

> **Vercel Hobby plan** caps serverless functions at 10 seconds per call. Short files will be fine; occasionally a busy 2-minute chunk may time out. Vercel Pro (60 s cap) resolves this for heavy use.

## As a subpage

Drop this folder into your site at any path (e.g. `yoursite.com/transcribe/`). Vercel handles the routing automatically if you deploy from the repo root.

## Theming

All design tokens (colors, fonts) live at the top of `styles.css` inside the `:root` block, clearly marked. Swap those values to match your site's design system.
