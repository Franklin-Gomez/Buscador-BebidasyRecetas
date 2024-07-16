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

