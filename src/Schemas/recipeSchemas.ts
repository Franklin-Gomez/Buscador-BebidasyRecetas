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

//----------------------------------------------------------------------------

//state de drinks
export const drinksSchema = z.object({ 
    Ingredient : z.string(),
    category : z.string()
})

//-----------------------------------------------------------------------------

// peticion para conseguir las bebidas

export const searchdrinkSchema = z.object({ 
    strDrink : z.string(),
    strDrinkThumb : z.string(),
    idDrink : z.string()
})

export const searchdrinksSchema =  z.object({
    drinks : z.array(  searchdrinkSchema )
})

//--------------------------------------------------------------------------------

// peticion para conseguir informacion detallada de la bebida seleccionada

export const drinkdetailSchema = z.object({
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

// export const drinkdetailsSchema = z.object({
//     drinks : z.array( drinkdetailSchema )
// })
