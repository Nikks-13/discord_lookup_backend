import express from 'express';
import cors from 'cors';
import userRoutes  from'./routes/user.js';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
