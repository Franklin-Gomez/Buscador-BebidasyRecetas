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


// Drinks API respuesta dividido en 2 - array y objeto
export const DrinkApiResponseSchema =  z.object({ 
    idDrink: z.string(),
    strDrink: z.string(),
    strDrinkThumb: z.string()
})

export const DrinksAPIReponseSchema = z.object({ 
    drinks : z.array(  DrinkApiResponseSchema )
})