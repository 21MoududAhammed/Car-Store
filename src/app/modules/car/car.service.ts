import { TCar } from './car.interface';
import { carModel } from './car.model';

// to create a single car to database
const createSingleCarService = async (carData: TCar) => {
  const result = await carModel.create(carData);
  return result;
};

// to get all cars from database
const getAllCarsService = async () => {
  const result = await carModel.find();
  return result;
};

// to get a cars from database based on id
const getSingleCarService = async (id: string) => {
  const result = await carModel.find({ _id: id });
  return result;
};

// to delete a car from db
const deleteSingleCarService = async (id: string) => {
  const result = await carModel.deleteOne({ _id: id });
  return result;
};

// to update a car to db
const updateSingleCarService = async (
  id: string,
  updatedCarData: Partial<TCar>,
) => {
  const result = await carModel.findByIdAndUpdate(
    id,
    { $set: updatedCarData },
    { new: true, runValidators: true },
  );

  return result;
};

export const carServices = {
  createSingleCarService,
  getAllCarsService,
  getSingleCarService,
  deleteSingleCarService,
  updateSingleCarService,
};
