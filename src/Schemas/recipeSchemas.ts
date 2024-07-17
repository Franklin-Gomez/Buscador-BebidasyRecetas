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

