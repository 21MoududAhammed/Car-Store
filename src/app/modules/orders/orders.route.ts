import express from 'express';
import { ordersControllers } from './orders.controller';

const orderRouter = express.Router();

// Order a car
orderRouter.post('/orders', ordersControllers.createOrder);

// get total revenue
orderRouter.get('/orders/revenue', ordersControllers.getTotalRevenue);

export default orderRouter;
