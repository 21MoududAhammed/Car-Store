import { Request, Response } from 'express';
import { carServices } from './car.service';
import { carZodSchema } from './car.validation';
import { ZodError } from 'zod';
import mongoose from 'mongoose';
import { TCar } from './car.interface';

// create a car
const createSingleCar = async (req: Request, res: Response) => {
  try {
    const carData: TCar = carZodSchema.parse(req.body);
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
        errors: err.issues,
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

//to get all cars from db
const getAllCars = async (req: Request, res: Response) => {
  try {
    const result = await carServices.getAllCarsService();
    res.status(200).json({
      success: true,
      message: 'Retrieved all cars details successfully.',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'An unexpected error occurred.',
      error: err,
    });
  }
};

// to get a car from db
const getSingleCar = async (req: Request, res: Response) => {
  try {
    const { carId } = req.params;
    // validate if the provided id is a valid ObjectId
    if (!mongoose.isValidObjectId(carId)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid car Id',
      });
    }
    // find the car by id
    const result = await carServices.getSingleCarService(carId);
    if (!result) {
      return res.status(404).json({
        success: false,
        message: 'Car not found',
      });
    }

    // respond with the car data
    res.status(200).json({
      success: true,
      message: 'Retrieved a car details successfully.',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'An unexpected error occurred.',
      error: err,
    });
  }
};

// to update single car by id
const updateSingleCar = async (req: Request, res: Response) => {
  try {
    const { carId } = req.params;
    const updatedCarData: Partial<TCar> = req.body;

    // validate if the car id is not valid object id
    if (!mongoose.isValidObjectId(carId)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid car Id',
      });
    }

    //validate if the request body is not empty
    if (Object.keys(updatedCarData).length === 0) {
      return res.status(400).json({
        success: false,
        message: 'No data provided to update.',
      });
    }
    // call the service to update the car
    const result = await carServices.updateSingleCarService(
      carId,
      updatedCarData,
    );

    // Handle case where no car is found
    if (!result) {
      return res.status(404).json({
        success: false,
        message: 'Car not found.',
      });
    }
    // Respond with success if car is updated
    res.status(200).json({
      success: true,
      message: 'Updated successfully.',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'An unexpected error occurred.',
      error: err,
    });
  }
};

// to delete single car service
const deleteSingleCar = async (req: Request, res: Response) => {
  try {
    const { carId } = req.params;
    // check if the id is valid object id
    if (!mongoose.isValidObjectId(carId)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid car Id.',
      });
    }
    // action to delete
    const result = await carServices.deleteSingleCarService(carId);
    // if the car is not found and not deleted
    if (result.deletedCount !== 1) {
      return res.status(404).json({
        success: false,
        message: 'Car not found. It may have already been deleted.',
      });
    }
    // if the targeted car is deleted successfully
    res.status(200).json({
      success: true,
      message: 'Deleted a car successfully.',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'An unexpected error occurred.',
      error: err,
    });
  }
};

export const carControllers = {
  createSingleCar,
  getAllCars,
  getSingleCar,
  deleteSingleCar,
  updateSingleCar,
};
