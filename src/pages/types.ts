import { z } from 'zod';

export const createFoodSchema = z.object({
  foodName: z
    .string({ error: 'Food name is required!' })
    .nonempty({ message: 'Food name is required!' }),

  foodImage: z
    .string()
    .url({ message: 'Food image must be a valid URL' })
    .optional()
    .or(z.literal('')),

  price: z
    .number({ error: 'Price is required!' })
    .min(0, { message: 'Price cannot be negative!' }),

  restaurantName: z
    .string({ error: 'Restaurant name must be a string' })
    .optional(),

  rating: z
    .number({ error: 'Rating must be a number' })
    .min(1, { message: 'Rating must be at least 1' })
    .max(5, { message: 'Rating cannot be more than 5' })
    .optional(),

  isActive: z
    .string({ error: 'isActive must be 0 or 1' })
    .min(0)
    .max(1)
    .optional()
});
export type createFoodSchemaType = z.infer<typeof createFoodSchema>;
