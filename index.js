const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('AI PTE Tutor Backend is running!');
});

app.post('/chat', async (req, res) => {
  const userMessage = req.body.message;

  try {
    const reply = `Teacher: Great question! Let's practice "${userMessage}". Here’s a simple explanation...`;
    res.json({ reply });
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
