import { z } from "zod"

export const CategoriesAPIRsponseSchema = z.object({
    drinks : z.array( 
        z.object({ 
            strCategory: z.string()
        })
    )
})

export const SearchFilterSchema = z.object({
    ingredient : z.string(),
    category : z.string()
})