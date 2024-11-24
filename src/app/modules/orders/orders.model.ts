import mongoose from 'mongoose';
import { TOrder } from './orders.interface';

export const ordersSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    car: { type: mongoose.Schema.Types.ObjectId, ref: 'Car', required: true },
    quantity: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  },
);

const OrderModel = mongoose.model<TOrder>('Order', ordersSchema);

export default OrderModel;
