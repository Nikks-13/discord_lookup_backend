import fetch from 'node-fetch';

export const fetchUserData = async (req, res) => {
  const userId = req.params.userId;
  const TOKEN = process.env.DISCORD_TOKEN;
  const headers = { 'Authorization': `Bot ${TOKEN}` };

  try {
    const response = await fetch(`https://discord.com/api/v10/users/${userId}`, {
      method: 'GET',
      headers: headers,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Unknown error');
    }

    res.json(data);
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ error: error.message || 'Internal Server Error' });
}
};



