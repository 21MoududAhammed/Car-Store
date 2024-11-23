import express from 'express';
import { carControllers } from './car.controller';

const carRouter = express.Router();

carRouter.post('/create-car', carControllers.createSingleCar);

export default carRouter;
