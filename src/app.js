import express from 'express';
import helmet from 'helmet';
import cors from 'cors'; 
import corsOptions from './config/corsConfig.js'; 
import limiter from './middlewares/limiter.js';
import helloRoute from './routes/helloRoute.js';

const app = express();

app.use(helmet());

app.use(cors(corsOptions));


app.use(limiter);

app.use('/api', helloRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
