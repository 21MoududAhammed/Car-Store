import { Request, Response } from 'express';
import { ordersZodValidationSchema } from './orders.validation';
import { ordersServices } from './orders.service';
import { ZodError } from 'zod';
// to create a order
const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = ordersZodValidationSchema.parse(req.body);
    const result = await ordersServices.createOrdersService(orderData);
    if (!result.success) {
      res.status(result.statusCode).json({
        success: result.success,
        message: result.message,
      });
    }
    res.status(result.statusCode).json({
      success: result.success,
      message: result.message,
      data: result.data,
    });
  } catch (err) {
    if (err instanceof ZodError) {
      // handle validation error
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        error: err,
      });
    }
    res.status(500).json({
      success: false,
      message: 'An unexpected error occurred.',
      error: err,
    });
  }
};
// to calculate total revenue
const getTotalRevenue = async (req: Request, res: Response) => {
  try {
    const totalRevenue = await ordersServices.getTotalRevenueFromDb();
    res.status(200).json({
      success: true,
      message: 'Total revenue calculated.',
      data: totalRevenue,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'An unexpected error occurred.',
      error: err,
    });
  }
};
export const ordersControllers = {
  createOrder,
  getTotalRevenue,
};
