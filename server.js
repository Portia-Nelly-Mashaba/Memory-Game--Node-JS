
// File: server.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

// Define fruits for matching pairs
const fruits = [
  '🍎', '🍊', '🍌', '🍇', '🍉', '🍒',
  '🍍', '🥭', '🥝', '🍓', '🍋', '🍑',
  '🥥', '🍐', '🍏', '🫐', '🍈', '🍔'
];

// Shuffle the array and generate pairs
const generateCards = () => {
  const selectedFruits = fruits.slice(0, 18); // Use only 18 fruits
  const pairs = [...selectedFruits, ...selectedFruits];
  return pairs.sort(() => Math.random() - 0.5); // Shuffle
};

// Endpoint to generate cards
app.get('/generate-cards', (req, res) => {
  const shuffledCards = generateCards();
  res.json({ cards: shuffledCards });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
