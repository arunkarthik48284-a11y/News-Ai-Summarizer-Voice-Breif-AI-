/* ═══════════════════════════════════════════════════
   VoiceBrief — Application Logic & Voice Engine
   Standalone version — No backend required
   ═══════════════════════════════════════════════════ */

// ─── Mock News Data ───
const NEWS_DATA = [
  {
    id: 1,
    title: "OpenAI Unveils GPT-5 with Real-Time Reasoning Capabilities",
    shortSummary: "OpenAI launches GPT-5 featuring advanced real-time reasoning, multimodal understanding, and a new safety architecture that sets new industry benchmarks.",
    detailedBrief: "OpenAI has officially announced GPT-5, its most powerful language model to date. The new model introduces real-time chain-of-thought reasoning, allowing it to solve complex multi-step problems with unprecedented accuracy. GPT-5 also features enhanced multimodal capabilities, processing text, images, audio, and video simultaneously. The company highlighted a new constitutional AI safety framework built into the model's architecture. Early benchmarks show a 40% improvement over GPT-4 in coding, mathematics, and scientific reasoning tasks. Enterprise pricing starts at $0.03 per 1K tokens, making it more cost-effective than its predecessor. Industry analysts predict this release will accelerate AI adoption across healthcare, finance, and education sectors.",
    category: "Technology",
    source: "TechCrunch",
    publishedAt: "2026-03-25T08:30:00Z"
  },
  {
    id: 2,
    title: "SpaceX Successfully Lands Starship on Mars Surface",
    shortSummary: "SpaceX achieves historic milestone as Starship completes first successful unmanned landing on Mars, opening the door for future human missions.",
    detailedBrief: "In a historic achievement for space exploration, SpaceX's Starship rocket has successfully completed an unmanned landing on the Martian surface. The spacecraft touched down in the Jezero Crater region after a seven-month journey, deploying solar panels and communication equipment autonomously. Elon Musk confirmed that the vehicle maintained structural integrity throughout the landing sequence, a major breakthrough after two previous attempts ended in failure. NASA Administrator praised the achievement as a 'giant leap for commercial space exploration.' The mission carried scientific instruments and a prototype habitat module. SpaceX plans to launch the first crewed Mars mission within the next 30 months, pending further testing and safety certifications from international space agencies.",
    category: "Technology",
    source: "Space News",
    publishedAt: "2026-03-25T07:15:00Z"
  },
  {
    id: 3,
    title: "India Wins Cricket World Cup 2026 in Thrilling Final",
    shortSummary: "India defeats Australia by 4 wickets in a nail-biting World Cup final at Lord's, with captain Shubman Gill scoring a century under pressure.",
    detailedBrief: "India has claimed the 2026 ICC Cricket World Cup title after a dramatic final against Australia at Lord's Cricket Ground in London. Captain Shubman Gill anchored the chase with a magnificent 118 off 104 balls, steering India to victory with just 3 balls to spare. Australia had set a formidable target of 312 runs, powered by Steve Smith's 97. The match saw multiple momentum swings, with India losing early wickets before Gill and Hardik Pandya's 142-run partnership turned the tide. Jasprit Bumrah was named Player of the Tournament for his 24 wickets across the competition. Prime Minister Modi congratulated the team, declaring a national celebration. The victory marks India's third World Cup title and first since 2011.",
    category: "Sports",
    source: "ESPN Cricinfo",
    publishedAt: "2026-03-24T18:00:00Z"
  },
  {
    id: 4,
    title: "Global Stock Markets Surge as Fed Signals Rate Cuts",
    shortSummary: "Wall Street and global markets rally sharply after Federal Reserve signals three rate cuts this year, boosting investor confidence worldwide.",
    detailedBrief: "Global stock markets experienced their strongest single-day rally in 18 months after the Federal Reserve signaled three interest rate cuts for the remainder of 2026. The Dow Jones Industrial Average surged 850 points, while the S&P 500 and Nasdaq climbed 2.8% and 3.4% respectively. The Fed's statement cited cooling inflation and a desire to support continued economic growth. Asian markets followed suit, with Japan's Nikkei rising 2.1% and India's Sensex gaining 1,200 points. Bond yields dropped sharply, and the dollar weakened against major currencies. Economists note that the anticipated cuts could lower mortgage rates to their lowest levels in three years, potentially reigniting the housing market. Tech and growth stocks led the rally.",
    category: "Business",
    source: "Bloomberg",
    publishedAt: "2026-03-25T06:00:00Z"
  },
  {
    id: 5,
    title: "European Union Passes Landmark AI Regulation Act",
    shortSummary: "The EU Parliament approves the world's most comprehensive AI regulation framework, setting strict rules for high-risk AI systems and transparency.",
    detailedBrief: "The European Parliament has passed the AI Regulation Act 2.0, the most comprehensive artificial intelligence governance framework in the world. The legislation classifies AI systems by risk level and imposes strict requirements on high-risk applications in healthcare, law enforcement, and financial services. Companies deploying AI must now provide detailed transparency reports, conduct mandatory bias audits, and ensure human oversight for critical decisions. Violations can result in fines up to 7% of global revenue. The act also establishes an EU AI Safety Board with enforcement powers. Major tech companies including Google, Microsoft, and Meta have expressed cautious support, while some startups warn it could stifle innovation. The regulation takes effect in 18 months.",
    category: "Politics",
    source: "Reuters",
    publishedAt: "2026-03-25T05:30:00Z"
  },
  {
    id: 6,
    title: "Tesla Launches $25,000 Electric Car for Mass Market",
    shortSummary: "Tesla unveils its long-awaited affordable EV priced at $25,000, featuring 300-mile range and autonomous driving capabilities.",
    detailedBrief: "Tesla has officially unveiled its most affordable electric vehicle yet, the Model Q, priced at $25,000 before federal tax credits. The compact sedan features a 300-mile range on a single charge, Level 3 autonomous driving capability, and Tesla's latest lithium-iron-phosphate battery technology. Production will begin at Tesla's Austin Gigafactory, with deliveries starting in Q3 2026. The vehicle targets the mass market segment currently dominated by traditional combustion engine cars. CEO Elon Musk stated the Model Q represents 'the tipping point for global EV adoption.' Analysts estimate the car could capture 15% of the US compact car market within two years. Traditional automakers are expected to respond with competing affordable EV models.",
    category: "Business",
    source: "CNBC",
    publishedAt: "2026-03-24T14:00:00Z"
  },
  {
    id: 7,
    title: "WHO Declares New Pandemic Preparedness Protocol",
    shortSummary: "The World Health Organization announces a revolutionary pandemic response system with AI-powered early detection and global coordination framework.",
    detailedBrief: "The World Health Organization has unveiled its next-generation Pandemic Preparedness Protocol, integrating artificial intelligence for early disease detection and rapid global response coordination. The system, called SENTINEL, uses machine learning algorithms to analyze health data from 194 member nations in real-time, identifying potential outbreaks weeks earlier than traditional surveillance methods. The protocol includes pre-negotiated vaccine sharing agreements, standardized quarantine procedures, and an international emergency funding mechanism. WHO Director-General emphasized that lessons from COVID-19 drove the development of this proactive approach. The system has already been tested in three simulation exercises, demonstrating a 60% faster response time compared to existing frameworks.",
    category: "Politics",
    source: "The Guardian",
    publishedAt: "2026-03-24T12:00:00Z"
  },
  {
    id: 8,
    title: "Premier League: Manchester City Signs Lamine Yamal",
    shortSummary: "Manchester City completes a record-breaking $220 million transfer for Barcelona's teenage sensation Lamine Yamal in a stunning move.",
    detailedBrief: "Manchester City has completed the signing of Barcelona prodigy Lamine Yamal in a record-breaking transfer worth $220 million, making him the most expensive footballer in history. The 18-year-old Spanish international has signed a six-year contract with the Premier League champions. Yamal, who burst onto the scene with his dazzling performances at Euro 2024, scored 22 goals and provided 15 assists for Barcelona last season. City manager Pep Guardiola described the signing as 'an investment in the future of football.' Barcelona accepted the deal to address their financial challenges, though fans have expressed significant disappointment. Football analysts suggest Yamal's pace and creativity will perfectly complement City's existing attacking lineup.",
    category: "Sports",
    source: "Sky Sports",
    publishedAt: "2026-03-24T10:00:00Z"
  },
  {
    id: 9,
    title: "Apple Unveils Revolutionary AR Glasses for Everyday Use",
    shortSummary: "Apple launches lightweight AR smart glasses that look like regular eyewear, featuring all-day battery life and seamless iOS integration.",
    detailedBrief: "Apple has unveiled its second-generation augmented reality product — Apple Glass — a pair of lightweight smart glasses that are virtually indistinguishable from regular eyewear. Unlike the bulky Vision Pro headset, Apple Glass weighs just 42 grams and offers 14 hours of battery life through an innovative solid-state battery design. The glasses project a transparent heads-up display visible only to the wearer, showing notifications, navigation, real-time translation, and contextual information. Powered by Apple's M4 chip, the device seamlessly integrates with iPhone, Apple Watch, and AirPods. The glasses are priced at $799, significantly lower than the $3,499 Vision Pro. Pre-orders open next month with availability in 28 countries.",
    category: "Technology",
    source: "The Verge",
    publishedAt: "2026-03-24T09:00:00Z"
  },
  {
    id: 10,
    title: "India's GDP Growth Accelerates to 8.2% in Q4",
    shortSummary: "India's economy grows at 8.2% in Q4 2025-26, driven by strong manufacturing output and digital services exports, surpassing all forecasts.",
    detailedBrief: "India's gross domestic product grew at an impressive 8.2% in the fourth quarter of fiscal year 2025-26, exceeding market expectations of 7.5%. The robust growth was driven by a resurgent manufacturing sector, which expanded 11.4%, and strong performance in digital services exports. The government's production-linked incentive schemes have attracted $48 billion in foreign direct investment over the past year. Consumer spending also showed healthy growth at 6.8%, supported by declining inflation and strong rural demand. The Reserve Bank of India maintained its growth forecast of 7.8% for the full fiscal year, making India the fastest-growing major economy globally.",
    category: "Business",
    source: "Economic Times",
    publishedAt: "2026-03-24T07:30:00Z"
  },
  {
    id: 11,
    title: "Olympics 2028 Los Angeles Unveils Futuristic Sports Venues",
    shortSummary: "LA 2028 Olympic committee reveals stunning solar-powered stadiums and an autonomous transport network connecting all Olympic venues.",
    detailedBrief: "The Los Angeles 2028 Olympic organizing committee has unveiled its finalized venue designs, showcasing a blend of sustainability and cutting-edge technology. The centerpiece is the renovated Los Angeles Memorial Coliseum, now featuring a retractable solar roof generating 100% of the venue's energy needs. A new Aquatics Center in Inglewood incorporates recycled ocean plastic in its construction. The committee also revealed an autonomous electric shuttle network that will connect all 40 Olympic venues, expected to transport 500,000 spectators daily. Athletes will stay in a carbon-neutral Olympic Village built with modular, reusable housing units. The total infrastructure investment exceeds $6 billion.",
    category: "Sports",
    source: "Olympic.org",
    publishedAt: "2026-03-23T16:00:00Z"
  },
  {
    id: 12,
    title: "UN Climate Summit Reaches Historic Carbon Tax Agreement",
    shortSummary: "195 nations agree on a global minimum carbon tax of $50 per ton at the UN Climate Summit, the most significant climate deal since Paris.",
    detailedBrief: "In a breakthrough moment for global climate action, 195 nations have agreed to implement a minimum carbon tax of $50 per metric ton of CO2 emissions at the UN Climate Summit in Dubai. The agreement, hailed as the most significant climate deal since the 2015 Paris Agreement, includes provisions for a gradual increase to $100 per ton by 2035. Developing nations will receive a five-year grace period and access to a $200 billion Green Transition Fund contributed by wealthy nations. The deal also establishes a carbon border adjustment mechanism to prevent companies from relocating to avoid the tax. Implementation begins January 2028, with an international monitoring body overseeing compliance and revenue allocation toward renewable energy projects.",
    category: "Politics",
    source: "BBC News",
    publishedAt: "2026-03-23T14:00:00Z"
  }
];

const CATEGORIES = ["Technology", "Sports", "Business", "Politics"];

// ─── State ───
let allNews = [...NEWS_DATA];
let filteredNews = [...NEWS_DATA];
let currentCategory = 'All';
let currentArticle = null;
let isPlaying = false;
let isPaused = false;
let playQueue = [];
let playIndex = 0;

// ─── Speech Synthesis (Voice Engine) ───
const synth = window.speechSynthesis;
let currentUtterance = null;
let selectedVoice = null;

function initVoice() {
  const loadVoices = () => {
    const voices = synth.getVoices();
    // Prefer natural-sounding English voices
    selectedVoice = voices.find(v => v.name.includes('Google') && v.lang.startsWith('en')) ||
                    voices.find(v => v.name.includes('Microsoft') && v.lang.startsWith('en') && v.name.includes('Online')) ||
                    voices.find(v => v.lang.startsWith('en-US')) ||
                    voices.find(v => v.lang.startsWith('en')) ||
                    voices[0];
  };
  loadVoices();
  if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = loadVoices;
  }
}

function speak(text, onEnd) {
  synth.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.voice = selectedVoice;
  utterance.rate = 1.05;
  utterance.pitch = 1.0;
  utterance.volume = 1.0;

  currentUtterance = utterance;
  isPlaying = true;
  isPaused = false;
  showAudioBar();
  updateEqualizer(true);
  updatePlayButton();

  utterance.onend = () => {
    isPlaying = false;
    isPaused = false;
    updateEqualizer(false);
    updatePlayButton();
    if (onEnd) onEnd();
  };

  utterance.onerror = () => {
    isPlaying = false;
    isPaused = false;
    updateEqualizer(false);
    updatePlayButton();
  };

  // Progress simulation
  const words = text.split(' ').length;
  const duration = (words / 2.5) * 1000;
  startProgress(duration);

  synth.speak(utterance);
}

function stopSpeech() {
  synth.cancel();
  isPlaying = false;
  isPaused = false;
  playQueue = [];
  playIndex = 0;
  updateEqualizer(false);
  updatePlayButton();
  resetProgress();
  clearPlayingHighlights();
  updateAudioInfo('Ready to play', '');
}

function pauseSpeech() {
  if (synth.speaking && !synth.paused) {
    synth.pause();
    isPaused = true;
    isPlaying = false;
    updateEqualizer(false);
    updatePlayButton();
  }
}

function resumeSpeech() {
  if (synth.paused) {
    synth.resume();
    isPaused = false;
    isPlaying = true;
    updateEqualizer(true);
    updatePlayButton();
  }
}

// ─── Audio Bar Controls ───
function showAudioBar() {
  document.getElementById('audio-bar').classList.add('visible');
}

function updateAudioInfo(title, source) {
  document.getElementById('audio-now').textContent = title;
  document.getElementById('audio-source').textContent = source;
}

function updateEqualizer(playing) {
  const eq = document.getElementById('audio-eq');
  if (playing) {
    eq.classList.add('playing');
  } else {
    eq.classList.remove('playing');
  }
}

function updatePlayButton() {
  const btn = document.getElementById('btn-play');
  btn.textContent = isPlaying ? '⏸' : '▶';
}

let progressInterval = null;
function startProgress(durationMs) {
  const bar = document.getElementById('audio-progress');
  bar.style.width = '0%';
  let elapsed = 0;
  const step = 100;
  clearInterval(progressInterval);
  progressInterval = setInterval(() => {
    elapsed += step;
    const pct = Math.min((elapsed / durationMs) * 100, 100);
    bar.style.width = pct + '%';
    if (pct >= 100) clearInterval(progressInterval);
  }, step);
}

function resetProgress() {
  clearInterval(progressInterval);
  document.getElementById('audio-progress').style.width = '0%';
}

function clearPlayingHighlights() {
  document.querySelectorAll('.quick-item.playing').forEach(el => el.classList.remove('playing'));
}

function audioAction(action) {
  switch (action) {
    case 'play':
      if (isPaused) {
        resumeSpeech();
      } else if (isPlaying) {
        pauseSpeech();
      } else if (playQueue.length > 0) {
        playNextInQueue();
      }
      break;
    case 'stop':
      stopSpeech();
      break;
    case 'next':
      if (playQueue.length > 0 && playIndex < playQueue.length - 1) {
        synth.cancel();
        playIndex++;
        playNextInQueue();
      }
      break;
    case 'prev':
      if (playQueue.length > 0 && playIndex > 0) {
        synth.cancel();
        playIndex--;
        playNextInQueue();
      }
      break;
  }
}

// ─── Play All News ───
function playAllNews() {
  stopSpeech();
  playQueue = filteredNews.map((n, i) => ({
    text: `News ${i + 1}. ${n.title}. ${n.shortSummary}`,
    title: n.title,
    source: n.source,
    id: n.id
  }));
  playIndex = 0;
  showAudioBar();
  playNextInQueue();
}

function playNextInQueue() {
  if (playIndex >= playQueue.length) {
    stopSpeech();
    updateAudioInfo('All news played ✓', '');
    return;
  }

  const item = playQueue[playIndex];
  updateAudioInfo(item.title, item.source);

  // Highlight current
  clearPlayingHighlights();
  const el = document.querySelector(`.quick-item[data-id="${item.id}"]`);
  if (el) {
    el.classList.add('playing');
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  speak(item.text, () => {
    playIndex++;
    playNextInQueue();
  });
}

// ─── Play Single / Brief / Detail ───
function playSingleNews(id) {
  const article = allNews.find(n => n.id === id);
  if (!article) return;

  stopSpeech();
  playQueue = [{
    text: `${article.title}. ${article.shortSummary}`,
    title: article.title,
    source: article.source,
    id: article.id
  }];
  playIndex = 0;
  showAudioBar();
  updateAudioInfo(article.title, article.source);

  clearPlayingHighlights();
  const el = document.querySelector(`.quick-item[data-id="${id}"]`);
  if (el) el.classList.add('playing');

  speak(playQueue[0].text);
}

function playBrief(id) {
  const article = allNews.find(n => n.id === id);
  if (!article) return;

  stopSpeech();
  playQueue = [{
    text: `${article.title}. ${article.shortSummary}`,
    title: article.title,
    source: article.source,
    id: article.id
  }];
  playIndex = 0;
  showAudioBar();
  updateAudioInfo(article.title, article.source);
  speak(playQueue[0].text);
}

function playDetail(id) {
  const article = allNews.find(n => n.id === id);
  if (!article) return;

  stopSpeech();
  playQueue = [{
    text: `${article.title}. Here's the full brief. ${article.detailedBrief}`,
    title: article.title,
    source: article.source,
    id: article.id
  }];
  playIndex = 0;
  showAudioBar();
  updateAudioInfo(`📖 ${article.title}`, article.source);
  speak(playQueue[0].text);
}

function listenToModal() {
  if (!currentArticle) return;
  playDetail(currentArticle.id);
}

// ─── Modal ───
function openModal(id) {
  const article = allNews.find(n => n.id === id);
  if (!article) return;

  currentArticle = article;
  const modal = document.getElementById('detail-modal');
  const catClass = 'cat-' + article.category.toLowerCase();

  document.getElementById('modal-category').className = `modal-category ${catClass}`;
  document.getElementById('modal-category').textContent = article.category;
  document.getElementById('modal-title').textContent = article.title;
  document.getElementById('modal-source').textContent = article.source;
  document.getElementById('modal-date').textContent = formatDate(article.publishedAt);
  document.getElementById('modal-body').textContent = article.detailedBrief;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('detail-modal').classList.remove('active');
  document.body.style.overflow = '';
  currentArticle = null;
}

// Close modal on overlay click
document.getElementById('detail-modal').addEventListener('click', (e) => {
  if (e.target === e.currentTarget) closeModal();
});

// Close modal on Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// ─── Data Filtering (local, no server needed) ───
function getNews(category = 'All') {
  if (category === 'All') return [...NEWS_DATA];
  return NEWS_DATA.filter(n => n.category.toLowerCase() === category.toLowerCase());
}

function searchNewsLocal(query) {
  if (!query) return [...NEWS_DATA];
  const q = query.toLowerCase();
  return NEWS_DATA.filter(n =>
    n.title.toLowerCase().includes(q) ||
    n.shortSummary.toLowerCase().includes(q) ||
    n.detailedBrief.toLowerCase().includes(q) ||
    n.category.toLowerCase().includes(q)
  );
}

// ─── Rendering ───
function renderQuickNews(news) {
  const list = document.getElementById('quick-list');

  if (news.length === 0) {
    list.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🔍</div>
        <p>No news found. Try a different category or search term.</p>
      </div>
    `;
    return;
  }

  list.innerHTML = news.map((n, i) => `
    <div class="quick-item" data-id="${n.id}" style="animation-delay: ${i * 0.06}s" onclick="playSingleNews(${n.id})">
      <span class="quick-num">${String(i + 1).padStart(2, '0')}</span>
      <div class="quick-content">
        <h3 class="quick-title">${n.title}</h3>
        <p class="quick-summary">${n.shortSummary}</p>
      </div>
      <div class="quick-meta">
        <span class="quick-category">${n.category}</span>
        <button class="quick-play-btn" onclick="event.stopPropagation(); playSingleNews(${n.id})" title="Play this headline">▶</button>
      </div>
    </div>
  `).join('');

  // Update listening time
  const totalWords = news.reduce((sum, n) => sum + n.title.split(' ').length + n.shortSummary.split(' ').length, 0);
  const minutes = Math.max(1, Math.round(totalWords / 150));
  document.getElementById('total-time').textContent = minutes;
  document.getElementById('stat-articles').textContent = news.length;
}

function renderDeepCards(news) {
  const grid = document.getElementById('deep-grid');

  if (news.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🧠</div>
        <p>No stories available for the selected filter.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = news.map((n, i) => {
    const catClass = 'cat-' + n.category.toLowerCase();
    return `
      <div class="deep-card" style="animation-delay: ${i * 0.08}s">
        <div class="deep-card-header">
          <span class="deep-category ${catClass}">${n.category}</span>
          <span class="deep-source">${n.source}</span>
        </div>
        <h3 class="deep-title">${n.title}</h3>
        <p class="deep-summary">${n.shortSummary}</p>
        <div class="deep-actions">
          <button class="btn-brief" onclick="playBrief(${n.id})">
            🎧 Listen Briefly
          </button>
          <button class="btn-detail" onclick="openModal(${n.id})">
            📖 Explain in Detail
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function renderAll(news) {
  filteredNews = news;
  renderQuickNews(news);
  renderDeepCards(news);
  // Re-init scroll animations
  setTimeout(setupScrollAnimations, 50);
}

// ─── Category Filtering ───
function setupCategoryChips() {
  const chips = document.querySelectorAll('.chip');
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      currentCategory = chip.dataset.category;

      const news = getNews(currentCategory);
      allNews = news;
      renderAll(news);

      // Clear search
      document.getElementById('search-input').value = '';
    });
  });
}

// ─── Search ───
function setupSearch() {
  const input = document.getElementById('search-input');
  let timeout;

  input.addEventListener('input', () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      const q = input.value.trim();
      if (q.length === 0) {
        const news = getNews(currentCategory);
        allNews = news;
        renderAll(news);
        return;
      }

      const results = searchNewsLocal(q);
      allNews = results;
      renderAll(results);

      // Reset active chip
      document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
      document.querySelector('.chip[data-category="All"]').classList.add('active');
      currentCategory = 'All';
    }, 300);
  });
}

// ─── Utilities ───
function formatDate(dateStr) {
  const d = new Date(dateStr);
  const now = new Date();
  const diffH = Math.floor((now - d) / (1000 * 60 * 60));

  if (diffH < 1) return 'Just now';
  if (diffH < 24) return `${diffH}h ago`;
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    const offset = 120;
    const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}

// ─── Scroll Animations ───
function setupScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.quick-item, .deep-card').forEach(el => {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
  });
}

// ─── Nav Scroll Effect ───
function setupNavScroll() {
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('nav');
    if (window.scrollY > 100) {
      nav.style.background = 'rgba(10,10,26,0.95)';
      nav.style.boxShadow = '0 4px 30px rgba(0,0,0,0.3)';
    } else {
      nav.style.background = 'rgba(10,10,26,0.7)';
      nav.style.boxShadow = 'none';
    }
  });
}

// ─── Init ───
function init() {
  initVoice();
  setupCategoryChips();
  setupSearch();
  setupNavScroll();
  renderAll(allNews);
}

document.addEventListener('DOMContentLoaded', init);
