import { CategoriesAPIRsponseSchema , SearchFilterSchema } from "../utils/recipes-schema";
import { z } from "zod";

export type Categories = z.infer<typeof CategoriesAPIRsponseSchema>

export type SearchFilter = z.infer<typeof SearchFilterSchema>