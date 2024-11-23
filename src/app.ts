import express, { Request, Response } from 'express';
import cors from 'cors';
import carRouter from './app/modules/car/car.route';

const app = express();

// middlewares
app.use(express.json());
app.use(cors());

app.use('/api', carRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello world!');
});

export default app;
