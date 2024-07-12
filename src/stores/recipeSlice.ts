import { StateCreator } from "zustand"
import { getCategories, getRecipeById, getRecipes } from "../API/RecipeService"
import { Categories, SearchFilter , DrinkApiResponse, RecipeAPIResponse } from "../Types"
import { createFavoriteType } from "./favoriteSlice"

export type createRecipesSliceProps = { 
    categories : Categories
    drinks : DrinkApiResponse[]
    selectedRecipe : RecipeAPIResponse
    modal : boolean
    fetchCategories: () => Promise<void>
    searchRecipes: ( searchFilters : SearchFilter) => Promise<void>
    selectRecipe : ( id : DrinkApiResponse['idDrink']) => Promise<void>
    closeModal : () => void
}

// store de las recetas
export const createRecipesSlice : StateCreator<createRecipesSliceProps & createFavoriteType , [] ,[] , createRecipesSliceProps > = (set) => ({
    categories : {
        drinks : []
    } , 

    drinks : []  ,

    selectedRecipe : {} as RecipeAPIResponse ,

    modal : false , 

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
            selectedRecipe : selectRecipe,
            modal : true
        })

    },

    closeModal : () => { 
        set({
            modal : false,
            selectedRecipe: {} as RecipeAPIResponse
        })
    }
})