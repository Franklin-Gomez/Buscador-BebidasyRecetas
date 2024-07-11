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

export const RecipeAPIResponseSchema = z.object({
    idDrink: z.string(),
    strDrink: z.string(),
    strDrinkThumb: z.string(),
    strInstructions: z.string(),
    strIngredient1: z.string().nullable(),
    strIngredient2: z.string().nullable(),
    strIngredient3: z.string().nullable(),
    strIngredient4: z.string().nullable(),
    strIngredient5: z.string().nullable(),
    strIngredient6: z.string().nullable(),
    strMeasure1: z.string().nullable(),
    strMeasure2: z.string().nullable(),
    strMeasure3: z.string().nullable(),
    strMeasure4: z.string().nullable(),
    strMeasure5: z.string().nullable(),
    strMeasure6: z.string().nullable(),
});