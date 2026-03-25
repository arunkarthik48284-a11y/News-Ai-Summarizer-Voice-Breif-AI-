const mockNews = [
  {
    id: 1,
    title: "OpenAI Unveils GPT-5 with Real-Time Reasoning Capabilities",
    shortSummary: "OpenAI launches GPT-5 featuring advanced real-time reasoning, multimodal understanding, and a new safety architecture that sets new industry benchmarks.",
    detailedBrief: "OpenAI has officially announced GPT-5, its most powerful language model to date. The new model introduces real-time chain-of-thought reasoning, allowing it to solve complex multi-step problems with unprecedented accuracy. GPT-5 also features enhanced multimodal capabilities, processing text, images, audio, and video simultaneously. The company highlighted a new constitutional AI safety framework built into the model's architecture. Early benchmarks show a 40% improvement over GPT-4 in coding, mathematics, and scientific reasoning tasks. Enterprise pricing starts at $0.03 per 1K tokens, making it more cost-effective than its predecessor. Industry analysts predict this release will accelerate AI adoption across healthcare, finance, and education sectors.",
    category: "Technology",
    source: "TechCrunch",
    publishedAt: "2026-03-25T08:30:00Z",
    imageKeyword: "artificial intelligence robot"
  },
  {
    id: 2,
    title: "SpaceX Successfully Lands Starship on Mars Surface",
    shortSummary: "SpaceX achieves historic milestone as Starship completes first successful unmanned landing on Mars, opening the door for future human missions.",
    detailedBrief: "In a historic achievement for space exploration, SpaceX's Starship rocket has successfully completed an unmanned landing on the Martian surface. The spacecraft touched down in the Jezero Crater region after a seven-month journey, deploying solar panels and communication equipment autonomously. Elon Musk confirmed that the vehicle maintained structural integrity throughout the landing sequence, a major breakthrough after two previous attempts ended in failure. NASA Administrator praised the achievement as a 'giant leap for commercial space exploration.' The mission carried scientific instruments and a prototype habitat module. SpaceX plans to launch the first crewed Mars mission within the next 30 months, pending further testing and safety certifications from international space agencies.",
    category: "Technology",
    source: "Space News",
    publishedAt: "2026-03-25T07:15:00Z",
    imageKeyword: "spacex rocket mars"
  },
  {
    id: 3,
    title: "India Wins Cricket World Cup 2026 in Thrilling Final",
    shortSummary: "India defeats Australia by 4 wickets in a nail-biting World Cup final at Lord's, with captain Shubman Gill scoring a century under pressure.",
    detailedBrief: "India has claimed the 2026 ICC Cricket World Cup title after a dramatic final against Australia at Lord's Cricket Ground in London. Captain Shubman Gill anchored the chase with a magnificent 118 off 104 balls, steering India to victory with just 3 balls to spare. Australia had set a formidable target of 312 runs, powered by Steve Smith's 97. The match saw multiple momentum swings, with India losing early wickets before Gill and Hardik Pandya's 142-run partnership turned the tide. Jasprit Bumrah was named Player of the Tournament for his 24 wickets across the competition. Prime Minister Modi congratulated the team, declaring a national celebration. The victory marks India's third World Cup title and first since 2011.",
    category: "Sports",
    source: "ESPN Cricinfo",
    publishedAt: "2026-03-24T18:00:00Z",
    imageKeyword: "cricket world cup celebration"
  },
  {
    id: 4,
    title: "Global Stock Markets Surge as Fed Signals Rate Cuts",
    shortSummary: "Wall Street and global markets rally sharply after Federal Reserve signals three rate cuts this year, boosting investor confidence worldwide.",
    detailedBrief: "Global stock markets experienced their strongest single-day rally in 18 months after the Federal Reserve signaled three interest rate cuts for the remainder of 2026. The Dow Jones Industrial Average surged 850 points, while the S&P 500 and Nasdaq climbed 2.8% and 3.4% respectively. The Fed's statement cited cooling inflation and a desire to support continued economic growth. Asian markets followed suit, with Japan's Nikkei rising 2.1% and India's Sensex gaining 1,200 points. Bond yields dropped sharply, and the dollar weakened against major currencies. Economists note that the anticipated cuts could lower mortgage rates to their lowest levels in three years, potentially reigniting the housing market. Tech and growth stocks led the rally, with major companies adding billions in market capitalization.",
    category: "Business",
    source: "Bloomberg",
    publishedAt: "2026-03-25T06:00:00Z",
    imageKeyword: "stock market trading"
  },
  {
    id: 5,
    title: "European Union Passes Landmark AI Regulation Act",
    shortSummary: "The EU Parliament approves the world's most comprehensive AI regulation framework, setting strict rules for high-risk AI systems and transparency.",
    detailedBrief: "The European Parliament has passed the AI Regulation Act 2.0, the most comprehensive artificial intelligence governance framework in the world. The legislation classifies AI systems by risk level and imposes strict requirements on high-risk applications in healthcare, law enforcement, and financial services. Companies deploying AI must now provide detailed transparency reports, conduct mandatory bias audits, and ensure human oversight for critical decisions. Violations can result in fines up to 7% of global revenue. The act also establishes an EU AI Safety Board with enforcement powers. Major tech companies including Google, Microsoft, and Meta have expressed cautious support, while some startups warn it could stifle innovation. The regulation takes effect in 18 months, giving companies time to comply.",
    category: "Politics",
    source: "Reuters",
    publishedAt: "2026-03-25T05:30:00Z",
    imageKeyword: "european parliament building"
  },
  {
    id: 6,
    title: "Tesla Launches $25,000 Electric Car for Mass Market",
    shortSummary: "Tesla unveils its long-awaited affordable EV priced at $25,000, featuring 300-mile range and autonomous driving capabilities.",
    detailedBrief: "Tesla has officially unveiled its most affordable electric vehicle yet, the Model Q, priced at $25,000 before federal tax credits. The compact sedan features a 300-mile range on a single charge, Level 3 autonomous driving capability, and Tesla's latest lithium-iron-phosphate battery technology. Production will begin at Tesla's Austin Gigafactory, with deliveries starting in Q3 2026. The vehicle targets the mass market segment currently dominated by traditional combustion engine cars. CEO Elon Musk stated the Model Q represents 'the tipping point for global EV adoption.' Analysts estimate the car could capture 15% of the US compact car market within two years. Traditional automakers are expected to respond with competing affordable EV models, intensifying the electric vehicle price war.",
    category: "Business",
    source: "CNBC",
    publishedAt: "2026-03-24T14:00:00Z",
    imageKeyword: "tesla electric car"
  },
  {
    id: 7,
    title: "WHO Declares New Pandemic Preparedness Protocol",
    shortSummary: "The World Health Organization announces a revolutionary pandemic response system with AI-powered early detection and global coordination framework.",
    detailedBrief: "The World Health Organization has unveiled its next-generation Pandemic Preparedness Protocol, integrating artificial intelligence for early disease detection and rapid global response coordination. The system, called SENTINEL, uses machine learning algorithms to analyze health data from 194 member nations in real-time, identifying potential outbreaks weeks earlier than traditional surveillance methods. The protocol includes pre-negotiated vaccine sharing agreements, standardized quarantine procedures, and an international emergency funding mechanism. WHO Director-General emphasized that lessons from COVID-19 drove the development of this proactive approach. The system has already been tested in three simulation exercises, demonstrating a 60% faster response time compared to existing frameworks. Full implementation across all member nations is expected by early 2027.",
    category: "Politics",
    source: "The Guardian",
    publishedAt: "2026-03-24T12:00:00Z",
    imageKeyword: "world health organization"
  },
  {
    id: 8,
    title: "Premier League: Manchester City Signs Lamine Yamal",
    shortSummary: "Manchester City completes a record-breaking $220 million transfer for Barcelona's teenage sensation Lamine Yamal in a stunning move.",
    detailedBrief: "Manchester City has completed the signing of Barcelona prodigy Lamine Yamal in a record-breaking transfer worth $220 million, making him the most expensive footballer in history. The 18-year-old Spanish international has signed a six-year contract with the Premier League champions. Yamal, who burst onto the scene with his dazzling performances at Euro 2024, scored 22 goals and provided 15 assists for Barcelona last season. City manager Pep Guardiola described the signing as 'an investment in the future of football.' Barcelona accepted the deal to address their financial challenges, though fans have expressed significant disappointment. Football analysts suggest Yamal's pace and creativity will perfectly complement City's existing attacking lineup, potentially making them favorites for the Champions League title.",
    category: "Sports",
    source: "Sky Sports",
    publishedAt: "2026-03-24T10:00:00Z",
    imageKeyword: "football soccer stadium"
  },
  {
    id: 9,
    title: "Apple Unveils Revolutionary AR Glasses for Everyday Use",
    shortSummary: "Apple launches lightweight AR smart glasses that look like regular eyewear, featuring all-day battery life and seamless iOS integration.",
    detailedBrief: "Apple has unveiled its second-generation augmented reality product — Apple Glass — a pair of lightweight smart glasses that are virtually indistinguishable from regular eyewear. Unlike the bulky Vision Pro headset, Apple Glass weighs just 42 grams and offers 14 hours of battery life through an innovative solid-state battery design. The glasses project a transparent heads-up display visible only to the wearer, showing notifications, navigation, real-time translation, and contextual information. Powered by Apple's M4 chip, the device seamlessly integrates with iPhone, Apple Watch, and AirPods. The glasses are priced at $799, significantly lower than the $3,499 Vision Pro. Pre-orders open next month with availability in 28 countries. Industry experts predict this could be the product that brings augmented reality to mainstream consumers.",
    category: "Technology",
    source: "The Verge",
    publishedAt: "2026-03-24T09:00:00Z",
    imageKeyword: "augmented reality glasses"
  },
  {
    id: 10,
    title: "India's GDP Growth Accelerates to 8.2% in Q4",
    shortSummary: "India's economy grows at 8.2% in Q4 2025-26, driven by strong manufacturing output and digital services exports, surpassing all forecasts.",
    detailedBrief: "India's gross domestic product grew at an impressive 8.2% in the fourth quarter of fiscal year 2025-26, exceeding market expectations of 7.5%. The robust growth was driven by a resurgent manufacturing sector, which expanded 11.4%, and strong performance in digital services exports. The government's production-linked incentive schemes have attracted $48 billion in foreign direct investment over the past year. Consumer spending also showed healthy growth at 6.8%, supported by declining inflation and strong rural demand. The Reserve Bank of India maintained its growth forecast of 7.8% for the full fiscal year, making India the fastest-growing major economy globally. Finance Minister highlighted that the growth demonstrates India's emergence as a key player in global supply chain diversification away from China.",
    category: "Business",
    source: "Economic Times",
    publishedAt: "2026-03-24T07:30:00Z",
    imageKeyword: "india economy growth"
  },
  {
    id: 11,
    title: "Olympics 2028 Los Angeles Unveils Futuristic Sports Venues",
    shortSummary: "LA 2028 Olympic committee reveals stunning solar-powered stadiums and an autonomous transport network connecting all Olympic venues.",
    detailedBrief: "The Los Angeles 2028 Olympic organizing committee has unveiled its finalized venue designs, showcasing a blend of sustainability and cutting-edge technology. The centerpiece is the renovated Los Angeles Memorial Coliseum, now featuring a retractable solar roof generating 100% of the venue's energy needs. A new Aquatics Center in Inglewood incorporates recycled ocean plastic in its construction. The committee also revealed an autonomous electric shuttle network that will connect all 40 Olympic venues, expected to transport 500,000 spectators daily. Athletes will stay in a carbon-neutral Olympic Village built with modular, reusable housing units. The total infrastructure investment exceeds $6 billion, with organizers claiming these will be the most environmentally sustainable Games in Olympic history. Ticket sales begin in September 2026.",
    category: "Sports",
    source: "Olympic.org",
    publishedAt: "2026-03-23T16:00:00Z",
    imageKeyword: "olympic stadium modern"
  },
  {
    id: 12,
    title: "UN Climate Summit Reaches Historic Carbon Tax Agreement",
    shortSummary: "195 nations agree on a global minimum carbon tax of $50 per ton at the UN Climate Summit, the most significant climate deal since Paris.",
    detailedBrief: "In a breakthrough moment for global climate action, 195 nations have agreed to implement a minimum carbon tax of $50 per metric ton of CO2 emissions at the UN Climate Summit in Dubai. The agreement, hailed as the most significant climate deal since the 2015 Paris Agreement, includes provisions for a gradual increase to $100 per ton by 2035. Developing nations will receive a five-year grace period and access to a $200 billion Green Transition Fund contributed by wealthy nations. The deal also establishes a carbon border adjustment mechanism to prevent companies from relocating to avoid the tax. Environmental groups have largely welcomed the agreement, though some argue the initial rate is too low. Implementation begins January 2028, with an international monitoring body overseeing compliance and revenue allocation toward renewable energy projects.",
    category: "Politics",
    source: "BBC News",
    publishedAt: "2026-03-23T14:00:00Z",
    imageKeyword: "climate summit conference"
  }
];

const categories = ["Technology", "Sports", "Business", "Politics"];

module.exports = { mockNews, categories };
