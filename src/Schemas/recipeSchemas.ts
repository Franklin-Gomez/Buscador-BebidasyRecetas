import { z } from "zod"


export const CategoriesAPISchema = z.array( 
    z.object({ 
        strCategory : z.string()
    })
)

export const CategoryAPISchema = z.object({
    drinks : z.array( 
        CategoriesAPISchema
    )
})

