# Struttura Assets

## Organizzazione delle immagini nella cartella `/public`

### 📁 `/videos`
- `hero-mountain-aesthetic.mp4` - Video per Hero Section (paesaggi montani cinematici)

### 📁 `/images` 
- Logo e immagini generali del brand

### 📁 `/events`
- `ski-and-sound/` - Immagini per evento invernale
  - `cover.jpg` - Immagine principale
  - `gallery-1.jpg`, `gallery-2.jpg`, etc. - Galleria hover
- `rossi-autumn-mix/`
  - `cover.jpg`
  - `gallery-1.jpg`, `gallery-2.jpg`, etc.
- `summer-alpine-flow/`
  - `cover.jpg`
  - `gallery-1.jpg`, `gallery-2.jpg`, etc.

### 📁 `/brand`
- `products/` - Foto prodotti GRINGO
  - `alpine-flow-tee.jpg`
  - `vertical-vibes-hoodie.jpg`
  - `mountain-spirit-cap.jpg`
  - `flow-state-backpack.jpg`
- `lifestyle/` - Immagini lifestyle del brand
  - `gracchio-alpino.jpg` - Per sezione filosofia brand

### 📁 `/team`
- `marco.jpg` - Founder & Alpinist
- `sofia.jpg` - Events & Community  
- `alex.jpg` - Music Director
- `team-mountain.jpg` - Foto di gruppo in montagna

## Come usare le immagini

Nel codice, riferisci alle immagini così:

```tsx
// Per Hero video
<source src="/videos/hero-mountain-aesthetic.mp4" type="video/mp4" />

// Per eventi  
coverImage: "/events/ski-and-sound/cover.jpg"
galleryImages: [
  "/events/ski-and-sound/gallery-1.jpg",
  "/events/ski-and-sound/gallery-2.jpg"
]

// Per prodotti
image: "/brand/products/alpine-flow-tee.jpg"

// Per team
image: "/team/marco.jpg"
```

## Raccomandazioni formati

- **Video Hero**: MP4, max 50MB, risoluzione 1920x1080
- **Immagini Eventi**: JPG, 1200x800px per cover, 800x600px per gallery
- **Prodotti**: JPG/PNG, 600x800px (formato verticale)
- **Team**: JPG, 400x500px (formato verticale)
- **Lifestyle**: JPG, varie dimensioni secondo necessità

## Ottimizzazione

Next.js ottimizza automaticamente le immagini quando usi il componente `<Image>`. Assicurati di:
- Usare formati moderni (WebP quando possibile)
- Comprimere le immagini prima dell'upload
- Mantenere dimensioni ragionevoli per le performance web