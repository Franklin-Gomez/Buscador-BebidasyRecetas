import { CategoryAPISchema , CategoriesAPISchema , drinksSchema, searchdrinkSchema, searchdrinksSchema , drinkdetailSchema} from "../Schemas/recipeSchemas";
import { z } from "zod";

export type CategoryAPISchemaType =  z.infer<typeof CategoryAPISchema> // api

export type CategoriesAPISchemaType = z.infer<typeof CategoriesAPISchema> // state

export type drinkType = z.infer<typeof drinksSchema>

export type searchdrinksType = z.infer<typeof searchdrinksSchema> // api

export type searchdrinkType = z.infer<typeof searchdrinkSchema> // state

export type drinkdetailType = z.infer<typeof drinkdetailSchema> // state - api