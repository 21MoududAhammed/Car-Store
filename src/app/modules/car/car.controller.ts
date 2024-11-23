import { Request, Response } from 'express';
import { carServices } from './car.service';
import { carZodSchema } from './car.validation';
import { ZodError } from 'zod';
// create a car
const createSingleCar = async (req: Request, res: Response) => {
  try {
    const carData = carZodSchema.parse(req.body);
    const result = await carServices.createSingleCarService(carData);
    res.status(200).json({
      success: true,
      message: 'Created Successfully!',
      data: result,
    });
  } catch (err) {
    if (err instanceof ZodError) {
      // handle validation errors
      return res.status(400).json({
        success: false,
        message: 'Validation Failed',
        errors: err,
      });
    }
    // handle other errors
    res.status(500).json({
      success: false,
      message: 'An unexpected error occurred.',
      errors: err,
    });
  }
};

export const carControllers = {
  createSingleCar,
};
