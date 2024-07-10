import { CategoriesAPIRsponseSchema } from "../utils/recipes-schema";
import { z } from "zod";

export type Categories = z.infer<typeof CategoriesAPIRsponseSchema>