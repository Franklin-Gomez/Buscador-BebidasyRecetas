import { StateCreator } from "zustand"
import { getCategories, getRecipes } from "../API/RecipeService"
import { Categories, SearchFilter } from "../Types"

export type createRecipesSliceProps = { 
    categories : Categories
    fetchCategories: () => Promise<void>
    searchRecipes: ( searchFilters : SearchFilter) => Promise<void>
}

// store de las recetas
export const createRecipesSlice : StateCreator<createRecipesSliceProps> = (set) => ({
    categories : {
        drinks : []
    } , 
    
    fetchCategories : async () => { 
        const categorias = await getCategories();

        set({
            categories : categorias
        })

    }, 

    searchRecipes : async ( searchFilters ) => { 
       await getRecipes( searchFilters )
    }
})