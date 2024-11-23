import { z } from 'zod';

export const carZodSchema = z.object({
  brand: z
    .string({ required_error: 'Brand is required' })
    .nonempty('Brand is required'), // Non-empty string
  model: z
    .string({ required_error: 'Model is required' })
    .nonempty('Model is required'),
  year: z
    .number({ required_error: 'Year is required' })
    .int('Year must be an integer')
    .min(1886, 'Year must be at least 1886') // First car invented in 1886
    .max(
      new Date().getFullYear(),
      `Year cannot exceed ${new Date().getFullYear()}`,
    ),
  price: z
    .number({ required_error: 'Price is required' })
    .positive('Price must be a positive number'),
  category: z.enum(['Sedan', 'SUV', 'Truck', 'Coupe', 'Convertible'], {
    required_error: 'Category is required',
  }),
  description: z.string().nonempty('Description is required'),
  quantity: z
    .number({ required_error: 'Quantity is required' })
    .int('Quantity must be an integer')
    .min(0, 'Quantity cannot be negative'),
  inStock: z.boolean({ required_error: 'In stock is required' }),
});
