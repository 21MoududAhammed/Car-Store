import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import carRouter from './app/modules/car/car.route';
import orderRouter from './app/modules/orders/orders.route';

const app: Application = express();

// middlewares
app.use(express.json());
app.use(cors());
// Route for car
app.use('/api', carRouter);
// Route for order
app.use('/api', orderRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello world!');
});

export default app;
