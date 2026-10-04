/**
 * ============================================================================
 * VIBRANT & COLORFUL BIRTHDAY WEBSITE - JAVASCRIPT ENGINE
 * ============================================================================
 * Features:
 * 1. Interactive 3D Gift Box Unboxing Experience
 * 2. Multi-Color Confetti Cannon (Physics Engine)
 * 3. Fairy Dust Sparkle Cursor Trail
 * 4. Procedural Romantic Background Music (Web Audio API)
 * 5. 3D Birthday Cake (Blow Out Candles + Sparklers)
 * 6. Rainbow Audio Canvas Visualizer
 * 7. "Why You're My Favorite Person" Generator + Copy-to-Clipboard
 * 8. 3D Open-When Colorful Envelopes
 * 9. Polaroid Memory Wall + Cinema Lightbox
 * 10. Press-and-Hold "Virtual Hug" with Flying Hearts
 * 11. Direct WhatsApp Message Sender
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     CONFIGURABLE SETTINGS (Edit these to personalize!)
     ========================================================================== */
  const CONFIG = {
    recipientName: "Mera Baccha...",

    yourWhatsAppNumber: "7307808514"
  };


  /* ==========================================================================
     1. SURPRISE GIFT BOX UNBOXING EXPERIENCE
     ========================================================================== */
  const surpriseOverlay = document.getElementById('surprise-overlay');
  const giftBox = document.getElementById('gift-box');
  const openGiftBtn = document.getElementById('open-gift-btn');
  let hasUnboxed = false;

  function triggerUnboxing() {
    if (hasUnboxed) return;
    hasUnboxed = true;

    // Play triumphant birthday chime via Web Audio API
    playBirthdayChime();

    // Start romantic demo background music smoothly
    startRomanticBGM();

    // Blast celebratory confetti burst
    blastConfetti(window.innerWidth / 2, window.innerHeight / 2, 90);

    // Animate lid flying off
    if (giftBox) {
      const lid = giftBox.querySelector('.gift-lid');
      if (lid) lid.style.transform = 'translateY(-120px) rotate(-25deg) scale(1.1)';
    }

    setTimeout(() => {
      if (surpriseOverlay) {
        surpriseOverlay.classList.add('opened');
      }
      // Blast another celebration wave
      setTimeout(() => {
        blastConfetti(window.innerWidth * 0.25, window.innerHeight * 0.4, 45);
        blastConfetti(window.innerWidth * 0.75, window.innerHeight * 0.4, 45);
      }, 350);

      // Start the dynamic hero typing effect
      startTypingEffect();
    }, 600);
  }

  if (openGiftBtn) openGiftBtn.addEventListener('click', triggerUnboxing);
  if (giftBox) giftBox.addEventListener('click', triggerUnboxing);


  /* ==========================================================================
     2. DYNAMIC TYPING EFFECT (HERO)
     ========================================================================== */
  const typingString = `Happy Birthday, ${CONFIG.recipientName}`;
  const typingElement = document.getElementById('typing-text');
  const heroSubtitle = document.getElementById('hero-subtitle');

  function startTypingEffect() {
    let charIndex = 0;
    const typingSpeed = 85;

    function typeWriter() {
      if (charIndex < typingString.length) {
        typingElement.textContent += typingString.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, typingSpeed);
      } else {
        setTimeout(() => {
          if (heroSubtitle) heroSubtitle.classList.add('visible');
        }, 350);
      }
    }
    typeWriter();
  }


  /* ==========================================================================
     3. COLORFUL CONFETTI CANNON (CANVAS PHYSICS)
     ========================================================================== */
  const confettiBtn = document.getElementById('confetti-cannon-btn');
  const confettiColors = ['#ff416c', '#ff4b2b', '#ec4899', '#8b5cf6', '#3b82f6', '#fbbf24', '#10b981', '#ffffff'];

  function blastConfetti(originX, originY, count = 60) {
    const container = document.body;
    for (let i = 0; i < count; i++) {
      const p = document.createElement('div');
      const isCircle = Math.random() > 0.5;
      const color = confettiColors[Math.floor(Math.random() * confettiColors.length)];

      p.style.position = 'fixed';
      p.style.left = `${originX}px`;
      p.style.top = `${originY}px`;
      p.style.width = isCircle ? `${Math.random() * 8 + 8}px` : `${Math.random() * 10 + 6}px`;
      p.style.height = isCircle ? p.style.width : `${Math.random() * 14 + 10}px`;
      p.style.backgroundColor = color;
      p.style.borderRadius = isCircle ? '50%' : '3px';
      p.style.zIndex = '9999';
      p.style.pointerEvents = 'none';
      p.style.boxShadow = `0 0 10px ${color}`;

      container.appendChild(p);

      const angle = Math.random() * Math.PI * 2;
      const velocity = Math.random() * 380 + 120;
      const destX = Math.cos(angle) * velocity;
      const destY = Math.sin(angle) * velocity - 150;
      const rotation = Math.random() * 720 - 360;

      p.style.transition = `all ${Math.random() * 1.5 + 1.2}s cubic-bezier(0.2, 0.8, 0.2, 1)`;

      requestAnimationFrame(() => {
        p.style.transform = `translate(${destX}px, ${destY}px) rotate(${rotation}deg) scale(${Math.random() * 0.6 + 0.6})`;
        p.style.opacity = '0';
      });

      setTimeout(() => p.remove(), 2600);
    }
  }

  if (confettiBtn) {
    confettiBtn.addEventListener('click', () => {
      blastConfetti(window.innerWidth / 2, window.innerHeight * 0.7, 75);
    });
  }


  /* ==========================================================================
     3.5. INTERACTIVE ROMANTIC THEME SWITCHER (Pink / Sky Blue / Aurora)
     ========================================================================== */
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const themeLabel = document.getElementById('theme-label');

  const themeList = [
    { id: 'theme-aurora', label: '💖 Pink & Sky', burst: '#ff758c' },
    { id: 'theme-pink',   label: '🌸 Rose Pink',  burst: '#ec4899' },
    { id: 'theme-skyblue', label: '🩵 Sky Blue',   burst: '#38bdf8' }
  ];

  let currentThemeIdx = 0;

  function switchTheme(idx, triggerBurst = false, burstX, burstY) {
    currentThemeIdx = idx;
    const current = themeList[idx];

    document.body.classList.remove('theme-aurora', 'theme-pink', 'theme-skyblue');
    document.body.classList.add(current.id);

    if (themeLabel) {
      themeLabel.textContent = current.label;
    }

    try {
      localStorage.setItem('birthday_theme_choice', current.id);
    } catch (e) {}

    if (triggerBurst) {
      const bx = burstX || window.innerWidth * 0.75;
      const by = burstY || 60;
      blastConfetti(bx, by, 30);
    }
  }

  // Restore saved theme or default to Aurora (Pink & Sky Blue)
  try {
    const savedTheme = localStorage.getItem('birthday_theme_choice');
    const foundIdx = themeList.findIndex(t => t.id === savedTheme);
    if (foundIdx !== -1) {
      switchTheme(foundIdx, false);
    } else {
      switchTheme(0, false);
    }
  } catch (e) {
    switchTheme(0, false);
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', (e) => {
      const nextIdx = (currentThemeIdx + 1) % themeList.length;
      const rect = themeToggleBtn.getBoundingClientRect();
      const bx = rect.left + rect.width / 2;
      const by = rect.top + rect.height / 2;
      switchTheme(nextIdx, true, bx, by);
    });
  }


  /* ==========================================================================
     4. ROMANTIC BACKGROUND MUSIC (BGM) & CHIMES
     ========================================================================== */
  const bgmAudio = document.getElementById('bgm-audio');
  const ambientBtn = document.getElementById('ambient-sound-btn');
  const soundLabel = document.getElementById('sound-label');

  let audioCtx = null;
  let isAmbientPlaying = false;
  let bgmUserPaused = false;
  const BGM_TARGET_VOLUME = 0.35;

  function getAudioContext() {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === 'suspended') audioCtx.resume();
    return audioCtx;
  }

  // Triumphant opening chime on unbox
  function playBirthdayChime() {
    try {
      const ctx = getAudioContext();
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        setTimeout(() => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, ctx.currentTime);

          gain.gain.setValueAtTime(0.001, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + 0.05);
          gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.2);

          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start();
          osc.stop(ctx.currentTime + 1.3);
        }, idx * 120);
      });
    } catch (e) {
      // AudioContext fallback
    }
  }

  function startRomanticBGM() {
    if (!bgmAudio) return;
    bgmAudio.volume = BGM_TARGET_VOLUME;
    bgmAudio.play().then(() => {
      isAmbientPlaying = true;
      bgmUserPaused = false;
      if (ambientBtn) ambientBtn.classList.add('active');
      if (soundLabel) soundLabel.textContent = "BGM: On";
    }).catch(() => {
      // Autoplay restriction: will start on next user tap
    });
  }

  function pauseRomanticBGM(userInitiated = true) {
    if (!bgmAudio) return;
    bgmAudio.pause();
    isAmbientPlaying = false;
    if (userInitiated) bgmUserPaused = true;
    if (ambientBtn) ambientBtn.classList.remove('active');
    if (soundLabel) soundLabel.textContent = "BGM: Off";
  }

  function toggleRomanticBGM() {
    if (!bgmAudio) return;
    if (bgmAudio.paused) {
      startRomanticBGM();
    } else {
      pauseRomanticBGM(true);
    }
  }

  if (ambientBtn) ambientBtn.addEventListener('click', toggleRomanticBGM);

  // Soft volume ducking for BGM when voice notes or envelope videos play
  function duckBGM() {
    if (bgmAudio && !bgmAudio.paused) {
      bgmAudio.volume = 0.06;
    }
  }

  function unduckBGM() {
    if (bgmAudio && !bgmAudio.paused && !bgmUserPaused) {
      bgmAudio.volume = BGM_TARGET_VOLUME;
    } else if (bgmAudio && bgmAudio.paused && !bgmUserPaused && hasUnboxed) {
      bgmAudio.volume = BGM_TARGET_VOLUME;
      bgmAudio.play().catch(() => {});
      if (ambientBtn) ambientBtn.classList.add('active');
      if (soundLabel) soundLabel.textContent = "BGM: On";
    }
  }


  /* ==========================================================================
     5. INTERACTIVE 3D BIRTHDAY CAKE & MAKE A WISH
     ========================================================================== */
  const blowBtn = document.getElementById('blow-candles-btn');
  const candles = document.querySelectorAll('.candle');
  const wishReveal = document.getElementById('wish-reveal');
  let candlesBlown = false;

  function blowOutCandles() {
    if (candlesBlown) return;
    candlesBlown = true;

    candles.forEach((c, idx) => {
      setTimeout(() => {
        c.classList.add('blown-out');
      }, idx * 160);
    });

    if (blowBtn) {
      blowBtn.style.opacity = '0.5';
      blowBtn.style.pointerEvents = 'none';
      blowBtn.innerHTML = "<span>Candles Bujh Gye Hain! 🎂🎉</span>";
    }

    setTimeout(() => {
      // Confetti & celebratory fanfare
      playBirthdayChime();
      blastConfetti(window.innerWidth / 2, window.innerHeight * 0.45, 80);
      if (wishReveal) wishReveal.classList.add('revealed');
    }, 550);
  }

  if (blowBtn) blowBtn.addEventListener('click', blowOutCandles);
  candles.forEach(candle => candle.addEventListener('click', blowOutCandles));


  /* ==========================================================================
     6. EMBEDDED VOICE NOTE & RAINBOW CANVAS VISUALIZER
     ========================================================================== */
  const audio = document.getElementById('voice-audio');
  const playBtn = document.getElementById('play-btn');
  const playIcon = document.getElementById('play-icon');
  const pauseIcon = document.getElementById('pause-icon');
  const progressBar = document.getElementById('progress-bar');
  const progressContainer = document.getElementById('progress-container');
  const currentTimeEl = document.getElementById('current-time');
  const durationEl = document.getElementById('duration');
  const waveformBars = document.getElementById('waveform-bars');
  const visualizerCanvas = document.getElementById('audio-visualizer-canvas');

  let isVoicePlaying = false;
  let isDemoSimulation = false;
  let demoTimer = null;
  let demoCurrentTime = 0;
  const DEMO_DURATION = 72; // 1:12 preview duration

  function formatTime(secs) {
    if (isNaN(secs)) return "0:00";
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  }

  function setVoicePlayingState(playing) {
    isVoicePlaying = playing;
    if (playing) {
      playIcon.classList.add('hidden');
      pauseIcon.classList.remove('hidden');
      waveformBars.classList.add('playing');
      duckBGM();
    } else {
      playIcon.classList.remove('hidden');
      pauseIcon.classList.add('hidden');
      waveformBars.classList.remove('playing');
      unduckBGM();
    }
  }

  function startVoiceDemo() {
    isDemoSimulation = true;
    setVoicePlayingState(true);
    durationEl.textContent = formatTime(DEMO_DURATION);

    demoTimer = setInterval(() => {
      demoCurrentTime += 0.25;
      if (demoCurrentTime >= DEMO_DURATION) {
        demoCurrentTime = 0;
        clearInterval(demoTimer);
        setVoicePlayingState(false);
      }
      const percent = (demoCurrentTime / DEMO_DURATION) * 100;
      progressBar.style.width = `${percent}%`;
      currentTimeEl.textContent = formatTime(demoCurrentTime);
    }, 250);
  }

  function pauseVoiceDemo() {
    clearInterval(demoTimer);
    setVoicePlayingState(false);
  }

  function toggleVoiceAudio() {
    if (audio.src && !audio.src.includes('audio.mp3') && !isNaN(audio.duration)) {
      if (audio.paused) {
        audio.play().then(() => setVoicePlayingState(true)).catch(() => startVoiceDemo());
      } else {
        audio.pause();
        setVoicePlayingState(false);
      }
    } else {
      audio.play().then(() => setVoicePlayingState(true)).catch(() => {
        if (!isVoicePlaying) startVoiceDemo();
        else pauseVoiceDemo();
      });
    }
  }

  if (playBtn) playBtn.addEventListener('click', toggleVoiceAudio);

  audio.addEventListener('timeupdate', () => {
    if (isDemoSimulation) return;
    const percent = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = `${percent}%`;
    currentTimeEl.textContent = formatTime(audio.currentTime);
  });

  audio.addEventListener('loadedmetadata', () => {
    durationEl.textContent = formatTime(audio.duration);
  });

  audio.addEventListener('ended', () => {
    setVoicePlayingState(false);
    progressBar.style.width = '0%';
    currentTimeEl.textContent = '0:00';
  });

  if (progressContainer) {
    progressContainer.addEventListener('click', (e) => {
      const rect = progressContainer.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const pct = Math.max(0, Math.min(1, clickX / rect.width));

      if (isDemoSimulation) {
        demoCurrentTime = pct * DEMO_DURATION;
        progressBar.style.width = `${pct * 100}%`;
        currentTimeEl.textContent = formatTime(demoCurrentTime);
      } else if (!isNaN(audio.duration)) {
        audio.currentTime = pct * audio.duration;
      }
    });
  }

  // Rainbow Oscillating Canvas Visualizer
  if (visualizerCanvas) {
    const vCtx = visualizerCanvas.getContext('2d');
    let vStep = 0;

    function renderVisualizer() {
      const w = visualizerCanvas.width = visualizerCanvas.offsetWidth;
      const h = visualizerCanvas.height = visualizerCanvas.offsetHeight;
      vCtx.clearRect(0, 0, w, h);

      const numBars = 42;
      const barWidth = (w / numBars) - 2;

      for (let i = 0; i < numBars; i++) {
        let barHeight = 4;
        if (isVoicePlaying) {
          barHeight = Math.sin(vStep * 0.08 + i * 0.3) * 18 + Math.cos(vStep * 0.05 + i * 0.2) * 12 + 25;
          barHeight = Math.max(4, Math.min(h - 10, barHeight));
        }

        const x = i * (barWidth + 2);
        const y = (h - barHeight) / 2;

        const grad = vCtx.createLinearGradient(0, y, 0, y + barHeight);
        grad.addColorStop(0, '#ec4899');
        grad.addColorStop(0.5, '#8b5cf6');
        grad.addColorStop(1, '#38bdf8');

        vCtx.fillStyle = isVoicePlaying ? grad : 'rgba(255, 255, 255, 0.12)';
        vCtx.beginPath();
        vCtx.roundRect(x, y, barWidth, barHeight, 4);
        vCtx.fill();
      }

      vStep++;
      requestAnimationFrame(renderVisualizer);
    }
    renderVisualizer();
  }


  /* ==========================================================================
     7. "WHY YOU ARE MY FAVORITE PERSON" GENERATOR
     ========================================================================== */
  const reasonsList = [
    "Kyuki chahe main kahin bhi jaun ya hum kitne bhi door hon, aap hi mera ghar ho.",
    "Apka woh unconditional loyalty, warmth, aur respect jo aap mujhe har ek din deti ho.",
    "Jis tarah se aap is distance ko itna chota bana deti ho, jisse apko pyaar karna ekdum effortless lagta hai.",
    "Yeh feel karna kitna comforting hai ki mera din chahe kitna bhi rough gaya ho, apka 'hello' sunte hi mera poora mood theek ho jata hai.",
    "Main kitna proud feel karta hoon jab bhi main kisi se apke baare mein baat karta hoon.",
    "Video calls par jab apko pata bhi nahi hota ki main apko ghoor raha hoon, tab apki aankhein kitni khoobsurat lagti hain.",
    "Meri sabse boring baaton aur bewajah ki overthinking ko bhi itne dhyaan aur pyaar se sunna.",
    "Jis tarah se aap mere sapnon par vishwas karti ho, un dino mein bhi jab main khud par doubt karne lagta hoon.",
    "Jis tarah se aap apne poore din ki choti-choti baatein aur gossips itne excitement ke saath mujhe sunati ho.",
    "Jis tarah se aap sach mein gussa ho jati ho jab bhi main khana khana bhool jata hoon.",
    "Hamare woh silly inside jokes jo sirf aur sirf hum dono samajhte hain.",
    "Jab main busy hota hoon tab apki ek saath reels bhejne ki aadat, aur yeh expect karna ki main har ek par reaction doon."
];

  const reasonBtn = document.getElementById('reason-btn');
  const appreciationText = document.getElementById('appreciation-text');
  const appreciationCounter = document.getElementById('appreciation-counter');
  const copyQuoteBtn = document.getElementById('copy-quote-btn');
  const copiedTooltip = document.getElementById('copied-tooltip');

  let lastIndex = -1;

  function getRandomReason() {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * reasonsList.length);
    } while (newIndex === lastIndex && reasonsList.length > 1);
    lastIndex = newIndex;
    return { text: reasonsList[newIndex], index: newIndex + 1 };
  }

  if (reasonBtn && appreciationText) {
    reasonBtn.addEventListener('click', () => {
      appreciationText.classList.add('fade-out');
      setTimeout(() => {
        const { text, index } = getRandomReason();
        appreciationText.textContent = text;
        if (appreciationCounter) {
          appreciationCounter.textContent = `Reason #${index} of ${reasonsList.length}`;
        }
        appreciationText.classList.remove('fade-out');
      }, 250);
    });
  }

  if (copyQuoteBtn && appreciationText) {
    copyQuoteBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(appreciationText.textContent.trim()).then(() => {
        if (copiedTooltip) {
          copiedTooltip.classList.add('show');
          setTimeout(() => copiedTooltip.classList.remove('show'), 1800);
        }
      });
    });
  }


  /* ==========================================================================
     8. 'OPEN WHEN' 3D ENVELOPES WITH PORTRAIT VIDEO (9:16)
     ========================================================================== */
  const envelopeCards = document.querySelectorAll('.flip-envelope-card');
  const allCardVideos = document.querySelectorAll('.card-portrait-video');

  envelopeCards.forEach(card => {
    const front = card.querySelector('.flip-front');
    const closeButtons = card.querySelectorAll('.card-close-btn');
    const video = card.querySelector('.card-portrait-video');
    const playOverlay = card.querySelector('.video-play-overlay-btn');

    function openEnvelope() {
      // Pause other videos and close other flipped cards
      envelopeCards.forEach(otherCard => {
        if (otherCard !== card && otherCard.classList.contains('is-flipped')) {
          otherCard.classList.remove('is-flipped');
          otherCard.setAttribute('aria-expanded', 'false');
          const otherVid = otherCard.querySelector('.card-portrait-video');
          if (otherVid) otherVid.pause();
        }
      });

      card.classList.add('is-flipped');
      card.setAttribute('aria-expanded', 'true');
    }

    function closeEnvelope() {
      card.classList.remove('is-flipped');
      card.setAttribute('aria-expanded', 'false');
      if (video) video.pause();
    }

    // Clicking front side opens the envelope
    if (front) {
      front.addEventListener('click', () => {
        openEnvelope();
      });
    }

    // Clicking close button folds the envelope back
    closeButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        closeEnvelope();
      });
    });

    // Prevent clicks inside the video from flipping the card back
    if (video) {
      video.addEventListener('click', (e) => {
        e.stopPropagation();
      });
    }

    // Video play/pause overlay and event handling
    if (video && playOverlay) {
      playOverlay.addEventListener('click', (e) => {
        e.stopPropagation();
        if (video.paused) {
          allCardVideos.forEach(v => {
            if (v !== video) v.pause();
          });
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      });

      video.addEventListener('play', () => {
        allCardVideos.forEach(v => {
          if (v !== video) v.pause();
        });
        playOverlay.style.opacity = '0';
        playOverlay.style.pointerEvents = 'none';
        duckBGM();
      });

      video.addEventListener('pause', () => {
        playOverlay.style.opacity = '1';
        playOverlay.style.pointerEvents = 'auto';
        unduckBGM();
      });

      video.addEventListener('ended', () => {
        playOverlay.style.opacity = '1';
        playOverlay.style.pointerEvents = 'auto';
        unduckBGM();
      });
    }

    // Keyboard accessibility
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        if (!card.classList.contains('is-flipped')) {
          e.preventDefault();
          openEnvelope();
        }
      } else if (e.key === 'Escape' && card.classList.contains('is-flipped')) {
        e.preventDefault();
        closeEnvelope();
      }
    });
  });


  /* ==========================================================================
     9. POLAROID GALLERY & CINEMA LIGHTBOX
     ========================================================================== */
  const polaroidFrames = document.querySelectorAll('.polaroid-frame');
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxDate = document.getElementById('lightbox-date');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxBackdrop = document.getElementById('lightbox-backdrop');
  const lightboxPrev = document.getElementById('lightbox-prev');
  const lightboxNext = document.getElementById('lightbox-next');

  let currentPhotoIndex = 0;
  const photoData = [];

  polaroidFrames.forEach((card, idx) => {
    const img = card.querySelector('img');
    const date = card.querySelector('.pol-date')?.textContent || '';
    const caption = card.querySelector('.pol-caption')?.textContent || '';

    photoData.push({ src: img.src, alt: img.alt, date, caption });
    card.addEventListener('click', () => openLightbox(idx));
  });

  function openLightbox(index) {
    currentPhotoIndex = index;
    const item = photoData[index];
    lightboxImg.src = item.src;
    lightboxImg.alt = item.alt;
    lightboxDate.textContent = item.date;
    if (lightboxCaption) {
      lightboxCaption.textContent = item.caption || '';
      lightboxCaption.style.display = item.caption ? 'block' : 'none';
    }
    lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightboxModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  function navLightbox(direction) {
    currentPhotoIndex = (currentPhotoIndex + direction + photoData.length) % photoData.length;
    openLightbox(currentPhotoIndex);
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);
  if (lightboxPrev) lightboxPrev.addEventListener('click', () => navLightbox(-1));
  if (lightboxNext) lightboxNext.addEventListener('click', () => navLightbox(1));

  window.addEventListener('keydown', (e) => {
    if (!lightboxModal.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navLightbox(-1);
    if (e.key === 'ArrowRight') navLightbox(1);
  });


  /* ==========================================================================
     10. PRESS-AND-HOLD "VIRTUAL HUG"
     ========================================================================== */
  const hugBtn = document.getElementById('hug-btn');
  const hugProgress = document.getElementById('hug-progress');
  const hugInstruction = document.getElementById('hug-instruction');
  const hugMessage = document.getElementById('hug-message');

  let hugHoldTimer = null;
  let hugProgressVal = 0;
  const HUG_TIME = 1500;
  const CIRCLE_CIRCUMFERENCE = 452;

  function startHugCharge() {
    hugBtn.classList.add('charging');
    hugInstruction.textContent = "Charging warmth across the long distance...";
    hugMessage.classList.remove('show');

    const startTime = Date.now();
    hugHoldTimer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      hugProgressVal = Math.min(1, elapsed / HUG_TIME);
      
      const offset = CIRCLE_CIRCUMFERENCE - (hugProgressVal * CIRCLE_CIRCUMFERENCE);
      hugProgress.style.strokeDashoffset = offset;

      if (hugProgressVal >= 1) completeHug();
    }, 20);
  }

  function cancelHugCharge() {
    if (hugProgressVal < 1) {
      clearInterval(hugHoldTimer);
      hugProgressVal = 0;
      hugProgress.style.strokeDashoffset = CIRCLE_CIRCUMFERENCE;
      hugBtn.classList.remove('charging');
      hugInstruction.textContent = "Press & hold the heart";
    }
  }

  function completeHug() {
    clearInterval(hugHoldTimer);
    hugBtn.classList.remove('charging');
    hugInstruction.textContent = "Delivered!";
    hugMessage.classList.add('show');
    hugProgress.style.strokeDashoffset = CIRCLE_CIRCUMFERENCE;

    // Confetti blast on hug completion
    blastConfetti(window.innerWidth / 2, window.innerHeight * 0.7, 50);
  }

  if (hugBtn) {
    hugBtn.addEventListener('mousedown', startHugCharge);
    window.addEventListener('mouseup', cancelHugCharge);
    hugBtn.addEventListener('touchstart', (e) => { e.preventDefault(); startHugCharge(); });
    window.addEventListener('touchend', cancelHugCharge);
  }


  /* ==========================================================================
     11. SEND A WHISPER BACK (DIRECT WHATSAPP MESSENGER)
     ========================================================================== */
  const whisperInput = document.getElementById('whisper-input');
  const sendWhisperBtn = document.getElementById('send-whisper-btn');

  if (sendWhisperBtn && whisperInput) {
    sendWhisperBtn.addEventListener('click', () => {
      const text = whisperInput.value.trim() || "Loved the birthday surprise so much! Thank you, mera baccha! ❤️";
      const encoded = encodeURIComponent(text);
      const url = `https://wa.me/${CONFIG.yourWhatsAppNumber}?text=${encoded}`;
      window.open(url, '_blank');
    });
  }


  /* ==========================================================================
     12. FAIRY DUST SPARKLE CURSOR TRAIL (CANVAS)
     ========================================================================== */
  const canvas = document.getElementById('particle-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    let particles = [];

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const sparkleColors = ['#ff758c', '#ff7eb3', '#fbc2eb', '#a6c1ee', '#ffd000', '#38bdf8'];

    function spawnSparkle(x, y) {
      for (let i = 0; i < 2; i++) {
        particles.push({
          x: x + (Math.random() - 0.5) * 12,
          y: y + (Math.random() - 0.5) * 12,
          size: Math.random() * 3 + 1.5,
          color: sparkleColors[Math.floor(Math.random() * sparkleColors.length)],
          vx: (Math.random() - 0.5) * 1.5,
          vy: Math.random() * -1.5 - 0.5,
          alpha: 1
        });
      }
    }

    window.addEventListener('mousemove', (e) => {
      spawnSparkle(e.clientX, e.clientY);
    });

    window.addEventListener('touchmove', (e) => {
      if (e.touches[0]) {
        spawnSparkle(e.touches[0].clientX, e.touches[0].clientY);
      }
    });

    function renderSparkles() {
      ctx.clearRect(0, 0, width, height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.025;

        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        if (p.alpha <= 0) particles.splice(i, 1);
      }

      ctx.globalAlpha = 1;
      requestAnimationFrame(renderSparkles);
    }
    renderSparkles();
  }

});
