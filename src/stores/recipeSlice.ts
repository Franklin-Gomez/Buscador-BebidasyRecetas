import { StateCreator } from "zustand"
import { getCategories, getRecipeById, getRecipes } from "../API/RecipeService"
import { Categories, SearchFilter , DrinkApiResponse, RecipeAPIResponse } from "../Types"

export type createRecipesSliceProps = { 
    categories : Categories
    drinks : DrinkApiResponse[]
    selectedRcipe : RecipeAPIResponse
    fetchCategories: () => Promise<void>
    searchRecipes: ( searchFilters : SearchFilter) => Promise<void>
    selectRecipe : ( id : DrinkApiResponse['idDrink']) => Promise<void>
}

// store de las recetas
export const createRecipesSlice : StateCreator<createRecipesSliceProps> = (set) => ({
    categories : {
        drinks : []
    } , 

    drinks : []  ,

    selectedRcipe : {} as RecipeAPIResponse ,

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

    },

    selectRecipe : async  ( id ) => { 
        const selectRecipe = await getRecipeById( id )
        
        set({ 
            selectedRcipe : selectRecipe
        })

    }
})