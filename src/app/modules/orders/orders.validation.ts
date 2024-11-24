import { z } from 'zod';

export const ordersZodValidationSchema = z.object({
  email: z
    .string({ required_error: 'Email is required' })
    .email('Invalid email address'),
  car: z.string({ required_error: 'Car is required' }),
  quantity: z.number({ required_error: 'Quantity is required' }),
  totalPrice: z.number({ required_error: 'Total price is required' }),
});
