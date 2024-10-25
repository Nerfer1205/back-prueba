import { Product } from "@prisma/client";

 export type CreateProductDto = Omit<Product, 'id' | 'createdAd' | 'updatedAt'>