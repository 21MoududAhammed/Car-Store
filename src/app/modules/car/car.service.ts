import { TCar } from './car.interface';
import { carModel } from './car.model';

const createSingleCarService = async (carData: TCar) => {
  const result = await carModel.create(carData);
  return result;
};

export const carServices = {
  createSingleCarService,
};
