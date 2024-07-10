import { StateCreator } from "zustand"
import { getCategories, getRecipes } from "../API/RecipeService"
import { Categories, SearchFilter , DrinkApiResponse } from "../Types"

export type createRecipesSliceProps = { 
    categories : Categories
    drinks : DrinkApiResponse[]
    fetchCategories: () => Promise<void>
    searchRecipes: ( searchFilters : SearchFilter) => Promise<void>
}

// store de las recetas
export const createRecipesSlice : StateCreator<createRecipesSliceProps> = (set) => ({
    categories : {
        drinks : []
    } , 

    drinks : []  ,

    fetchCategories : async () => { 
        const categorias = await getCategories();

        set({
            categories : categorias
        })

    }, 

    searchRecipes : async ( searchFilters ) => { 
       const data = await getRecipes( searchFilters )

       set({
            drinks : data?.drinks
       })

    }
})