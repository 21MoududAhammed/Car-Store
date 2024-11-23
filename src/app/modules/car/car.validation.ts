import { z } from 'zod';

export const carZodSchema = z.object({
  brand: z.string().nonempty('Brand is required'), // Non-empty string
  model: z.string().nonempty('Model is required'),
  year: z
    .number()
    .int('Year must be an integer')
    .min(1886, 'Year must be at least 1886') // First car invented in 1886
    .max(
      new Date().getFullYear(),
      `Year cannot exceed ${new Date().getFullYear()}`,
    ),
  price: z.number().positive('Price must be a positive number'),
  category: z.enum(['Sedan', 'SUV', 'Truck', 'Coupe', 'Convertible'], {
    required_error: 'Category is required',
  }),
  description: z.string().nonempty('Description is required'),
  quantity: z
    .number()
    .int('Quantity must be an integer')
    .min(0, 'Quantity cannot be negative'),
  inStock: z.boolean(),
});
