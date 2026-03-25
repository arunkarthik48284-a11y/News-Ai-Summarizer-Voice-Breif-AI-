const express = require('express');
const cors = require('cors');
const path = require('path');
const { mockNews, categories } = require('./data/mockNews');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// ─── API Routes ──────────────────────────────────────────

// Get all headlines (short summaries for Quick News)
app.get('/api/headlines', (req, res) => {
  const { category } = req.query;
  let news = mockNews;

  if (category && category !== 'All') {
    news = news.filter(n => n.category.toLowerCase() === category.toLowerCase());
  }

  const headlines = news.map(n => ({
    id: n.id,
    title: n.title,
    shortSummary: n.shortSummary,
    category: n.category,
    source: n.source,
    publishedAt: n.publishedAt
  }));

  res.json(headlines);
});

// Get single article detail (for Deep Brief)
app.get('/api/article/:id', (req, res) => {
  const article = mockNews.find(n => n.id === parseInt(req.params.id));
  if (!article) {
    return res.status(404).json({ error: 'Article not found' });
  }
  res.json(article);
});

// Get available categories
app.get('/api/categories', (req, res) => {
  res.json(categories);
});

// Search news
app.get('/api/search', (req, res) => {
  const { q } = req.query;
  if (!q) {
    return res.json(mockNews);
  }

  const query = q.toLowerCase();
  const results = mockNews.filter(n =>
    n.title.toLowerCase().includes(query) ||
    n.shortSummary.toLowerCase().includes(query) ||
    n.detailedBrief.toLowerCase().includes(query) ||
    n.category.toLowerCase().includes(query)
  );

  res.json(results);
});

// Fallback: serve index.html for any other route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`\n  🎙️  VoiceBrief Server Running`);
  console.log(`  ➜  Local: http://localhost:${PORT}\n`);
});
