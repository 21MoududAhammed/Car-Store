import express from 'express';
import { carControllers } from './car.controller';

const carRouter = express.Router();
// route to create a car
carRouter.post('/cars', carControllers.createSingleCar);
// route to get all cars
carRouter.get('/cars', carControllers.getAllCars);
// route to get a car
carRouter.get('/cars/:carId', carControllers.getSingleCar);
// route to delete a car
carRouter.delete('/cars/:carId', carControllers.deleteSingleCar);
// route to update a car
carRouter.put('/cars/:carId', carControllers.updateSingleCar);

export default carRouter;
