import express from 'express';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
// import cors from 'cors'; 
// import corsOptions from './config/corsConfig.js'; 

const app = express();

app.use(helmet());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 100, 
});
app.use(limiter);

app.get('/api/hello', (req, res) => {
  res.json({ message: "Hello world" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
