import axios from "axios";
import { CategoriesAPIRsponseSchema , DrinksAPIReponseSchema, RecipeAPIResponseSchema } from "../utils/recipes-schema";
import { SearchFilter } from "../Types";
import { DrinkApiResponse } from "../Types";

export async function getCategories () { 

    const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
    
    try {

        const {data}  = await axios(url)
        const resultado = CategoriesAPIRsponseSchema.safeParse(data)

        if( resultado.success) { 
            return resultado.data
        }

    } catch (error) {
        console.log( error )
    }

}

export async function getRecipes ( searchFilters : SearchFilter ) { 
 
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${searchFilters.category}&i=${searchFilters.ingredient}`;

    try {

        const {data}  = await axios(url)
        const resultado = DrinksAPIReponseSchema.safeParse(data)
        
        if( resultado.success) { 
            return resultado.data
        }

    } catch (error) {
        console.log( error )
    }
}

export async function getRecipeById ( id : DrinkApiResponse['idDrink']) { 
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`

    try {

        const {data}  = await axios(url)
        const resultado = RecipeAPIResponseSchema.safeParse(data.drinks[0])
        
        if( resultado.success) { 
            return resultado.data
        }

    } catch (error) {
        console.log( error )
    }
}