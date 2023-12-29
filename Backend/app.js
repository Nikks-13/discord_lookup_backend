// File: server.js
import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const TOKEN = process.env.DISCORD_TOKEN;

app.use(cors());

app.get('/api/users/:userId', async (req, res) => {
  try {
    const response = await fetch(`https://discord.com/api/v10/users/${req.params.userId}`, {
      method: 'GET',
      headers: { 'Authorization': `Bot ${TOKEN}` },
    });

    if (!response.ok) {
      throw new Error((await response.json()).error || 'Unknown error');
    }

    res.json(await response.json());
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
