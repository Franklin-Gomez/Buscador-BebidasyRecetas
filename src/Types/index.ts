import { CategoryAPISchema , CategoriesAPISchema , drinksSchema} from "../Schemas/recipeSchemas";
import { z } from "zod";

export type CategoryAPISchemaType =  z.infer<typeof CategoryAPISchema>

export type CategoriesAPISchemaType = z.infer<typeof CategoriesAPISchema>

export type drinkType = z.infer<typeof drinksSchema>