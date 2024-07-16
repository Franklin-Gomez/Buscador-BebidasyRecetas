import { z } from "zod"

// el arreglo que esta dentro del objeto de categorias
export const CategoriesAPISchema = z.array( 
    z.object({ 
        strCategory : z.string()
    })
)

// el objeto de categorias
export const CategoryAPISchema = z.object({
    drinks : CategoriesAPISchema
})

//state de drinks
export const drinksSchema = z.object({ 
    Ingredient : z.string(),
    category : z.string()
})

