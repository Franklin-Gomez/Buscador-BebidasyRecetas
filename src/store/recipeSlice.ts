import { StateCreator } from 'zustand'
import { fetchCategory } from '../API/RecipeService'
import { CategoriesAPISchemaType , drinkType } from '../Types'
import { fetchDrink } from '../API/RecipeService'

export type recipeSliceType = {
    category : CategoriesAPISchemaType
    drinksInfo : []
    getCategory: () => void
    getDrinks : ( drinks : drinkType) => void
}

export const recipeSlice : StateCreator<recipeSliceType> = (set) => ({ 

    category : [],

    drinksInfo : [],

    getCategory : async () => { 

        const drinks = await fetchCategory();
       
        set({
            category : drinks
        })
       
    },

    getDrinks : async ( drinks ) => { 
       const resultado = await fetchDrink( drinks );


    }

})