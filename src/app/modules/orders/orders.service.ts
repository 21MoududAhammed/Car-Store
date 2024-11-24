import { carModel } from '../car/car.model';
import { TOrder } from './orders.interface';
import OrderModel from './orders.model';
// create order service to the db
const createOrdersService = async (order: TOrder) => {
  try {
    // Find the car by id
    const carData = await carModel.findById(order.car);
    // Check if car exists
    if (!carData) {
      return {
        success: false,
        message: 'Car not found',
        statusCode: 404,
      };
    }

    //   Check there is enough stock
    if (carData.quantity < order.quantity) {
      return {
        success: false,
        message: 'Insufficient stock',
        statusCode: 400,
      };
    }

    //   Update Car stock
    carData.quantity -= order.quantity;

    //   if quantity goes to 0, set inStock to false
    if (carData.quantity === 0) {
      carData.inStock = false;
    }

    //  Save updated carData
    await carData.save();

    //   create Order
    const savedOrder = await OrderModel.create(order);
    return {
      success: true,
      message: 'Order saved successfully.',
      data: savedOrder,
      statusCode: 201,
    };
  } catch (err) {
    console.log(err);
    throw new Error('Error occurred while processing the order.');
  }
};

// Calculate and get revenew from db
const getTotalRevenueFromDb = async () => {
  try {
    const results = await OrderModel.aggregate([
      {
        $group: {
          _id: null,
          totalRevenue: {
            $sum: '$totalPrice',
          },
        },
      },
    ]);
    // Extract total revenue or default to 0 if no orders exist
    const totalRevenue = results[0]?.totalRevenue || 0;
    return totalRevenue;
  } catch (err) {
    console.log(`Something went wrong in getRevenue: ${err}`);
  }
};

export const ordersServices = {
  createOrdersService,
  getTotalRevenueFromDb,
};
