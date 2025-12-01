# Video per Hero Section

Metti qui il tuo video hero con il nome:
- `hero-mountain.mp4` (raccomandato <50MB)

O usa uno di questi video gratuiti di alta qualità:

## Opzioni Video Royalty-Free:
1. https://mixkit.co/free-stock-video/mountain/ 
2. https://www.pexels.com/videos/mountains/
3. https://pixabay.com/videos/search/mountains/

## Come comprimere video:
```bash
ffmpeg -i input.mp4 -vcodec h264 -crf 28 -preset slow -vf scale=1920:1080 hero-mountain.mp4
```