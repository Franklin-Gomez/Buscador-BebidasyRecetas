import { StateCreator } from 'zustand'
import { fetchCategory } from '../API/RecipeService'
import { CategoriesAPISchemaType , drinkType } from '../Types'

export type recipeSliceType = {
    category : CategoriesAPISchemaType
    getCategory: () => void
    getDrinks : ( drinks : drinkType) => void
}

export const recipeSlice : StateCreator<recipeSliceType> = (set) => ({ 

    category : [],

    getCategory : async () => { 

        const drinks = await fetchCategory();
       
        set({
            category : drinks
        })
       
    },

    getDrinks : async ( drinks ) => { 
       
    }

})