import mongoose, { Schema } from 'mongoose';
import { TCar } from './car.interface';

export const carSchema = new Schema<TCar>(
  {
    brand: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    price: { type: Number, required: true },
    category: {
      type: String,
      required: true,
      enum: ['Sedan', 'SUV', 'Truck', 'Coupe', 'Convertible'],
    },
    description: { type: String, required: true },
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, required: true },
  },
  { timestamps: true },
);

export const carModel = mongoose.model<TCar>('Car', carSchema);
