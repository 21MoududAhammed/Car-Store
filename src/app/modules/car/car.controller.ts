import { Request, Response } from 'express';
import { carServices } from './car.service';

const createSingleCar = async (req: Request, res: Response) => {
  try {
    const carData = req.body;
    const result = await carServices.createSingleCarService(carData);
    res.status(200).json({
      success: true,
      message: 'Created Successfully!',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const carControllers = {
  createSingleCar,
};
