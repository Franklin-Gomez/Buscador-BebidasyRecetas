import { StateCreator } from 'zustand'
import { fetchCategory } from '../API/RecipeService'
import { CategoriesAPISchemaType } from '../Types'

export type recipeSliceType = {
    category : CategoriesAPISchemaType,
    getCategory: () => void
}

export const recipeSlice : StateCreator<recipeSliceType> = (set) => ({ 

    category : [],

    getCategory : async () => { 

        const drinks = await fetchCategory();
       
        set({
            category : drinks
        })
       
    }
})