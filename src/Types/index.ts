import { CategoriesAPIRsponseSchema , SearchFilterSchema , DrinkApiResponseSchema , DrinksAPIReponseSchema } from "../utils/recipes-schema";
import { z } from "zod";
import { RecipeAPIResponseSchema } from "../utils/recipes-schema";

export type Categories = z.infer<typeof CategoriesAPIRsponseSchema>

export type SearchFilter = z.infer<typeof SearchFilterSchema>


export type DrinkApiResponse = z.infer< typeof DrinkApiResponseSchema >

export type DrinksApiResponse = z.infer< typeof DrinksAPIReponseSchema >

export type RecipeAPIResponse = z.infer< typeof RecipeAPIResponseSchema >
