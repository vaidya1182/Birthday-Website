# 🎁 The Ultimate Colorful Birthday Surprise Website

A vibrant, colorful, and jaw-dropping birthday experience created to surprise your girlfriend and make her feel like the most cherished girl in the world! 💖

---

## 🌟 The "WOW" Surprise Flow

1. **The Gift Box Unboxing:**
   - When she opens the link, a glowing, floating 3D wrapped gift box appears:
     > *"A special surprise from your favourite boy... ✨ Tap To Open Your Surprise"*
   - When she taps, the lid pops off, a triumphant celebration chime plays, and a massive shower of multi-colored confetti erupts across her screen!

2. **Fairy Dust Cursor Trail:**
   - As she moves her finger or mouse across the screen, a trail of glowing rainbow fairy dust sparkles follows her touch.

3. **Interactive 3D Cake & Candle Sparklers:**
   - Multi-tiered cake with strawberries, frosting drips, and flickering candles.
   - She can tap the candles to blow them out: flames extinguish, realistic smoke curls up, celebratory confetti blasts again, and your personal wish message appears.

4. **Rainbow Waveform Voice Note Player:**
   - Central, high-visibility player with animated multi-colored soundwave bars and a real-time rainbow canvas visualizer.
   - Interactive scrubber, duration timers, and a demo mode if your audio file hasn't been uploaded yet.

5. **Our Story (Colorful Bento Grid):**
   - 4 vibrant, glowing cards tracing the journey:
     - *Day 01: The First Hello*
     - *Late Nights: The 3 AM Phone Calls*
     - *The Moment: When I Knew You Were The One*
     - *Always: Distance Can't Beat Us*

6. **"Why You Are My Favorite Person" Generator:**
   - 12 honest, relatable reasons that make her feel special.
   - Includes a one-click "Copy" button with tooltip feedback.

7. **Hamari Life ke alag-alag Pal (3D Portrait Video Cards):**
   - 4 vibrant flip cards (Rose Pink, Royal Purple, Sunset Coral, Golden Sunrise) showcasing key relationship milestones with full-cover 9:16 portrait videos.

8. **Memory Wall & Cinema Lightbox:**
   - Full-card edge-to-edge romantic photos with sleek floating date badges. Hovering zooms in smoothly with a pink glow; clicking opens a full-screen **Cinema Lightbox**.

9. **Interactive "Send A Virtual Hug":**
   - Press-and-hold heart that charges warmth and launches heart emojis upon release.

10. **Direct WhatsApp Reply Bar:**
    - She can type her reaction and tap **"Send to Him (WhatsApp)"**, opening WhatsApp with her message pre-filled to your phone number!

11. **Romantic Theme Switcher, Confetti Cannon & BGM:**
    - **🎨 Romantic Themes:** Choose between **💖 Pink & Sky Aurora** (Default romantic sunset blend), **🌸 Rose Blossom Pink**, and **🩵 Dreamy Celestial Sky Blue** via the top-right button!
    - **🎉 Confetti Cannon:** Blast celebratory confetti anytime with one tap.
    - **🎵 BGM Audio:** Play soothing romantic background melodies (`bgm.mp3`).

---

## ⚙️ Quick 1-Minute Personalization (In `script.js`)

Open [**`script.js`**](file:///C:/Users/Asus/.gemini/antigravity/scratch/birthday-website/script.js#L23-L33) to set your details:

```javascript
const CONFIG = {
  recipientName: "Meri Jaan...",

  // Put your WhatsApp number with country code (e.g. '919876543210' for India)
  yourWhatsAppNumber: "919876543210"
};
```

### To Replace Placeholders:
- **Portrait Videos ('Hamari Life ke alag-alag Pal'):**
  - All 4 cards have working demo portrait videos located in the `videos/` folder:
    - `videos/open-when-1.mp4` -> *Pal 01: Jab Hum Pehli Baar Mile The*
    - `videos/open-when-2.mp4` -> *Pal 02: Der Raat Tak Hamari Baatein*
    - `videos/open-when-3.mp4` -> *Pal 03: Door Rehkar Bhi Saath Ka Ehsaas*
    - `videos/open-when-4.mp4` -> *Pal 04: Jab Realize Hua Aap Hi 'The One' Ho*
- **Background Music (BGM):** A high-quality romantic demo soundtrack is included as `bgm.mp3`. You can replace it with your own favorite romantic track by placing your song as `bgm.mp3` in the `birthday-website/` folder.
- **Voice Note:** Put your audio file as `audio.mp3` in the `birthday-website/` folder, or update `src="audio.mp3"` in [`index.html`](file:///C:/Users/Asus/.gemini/antigravity/scratch/birthday-website/index.html).
- **Photos:** Replace the demo Unsplash URLs in the `<div class="polaroid-grid">` section of [`index.html`](file:///C:/Users/Asus/.gemini/antigravity/scratch/birthday-website/index.html) with your photos.

