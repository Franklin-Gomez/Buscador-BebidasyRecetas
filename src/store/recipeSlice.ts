import { StateCreator } from 'zustand'
import { CategoriesAPISchemaType , drinkType , searchdrinkType } from '../Types'
import { fetchDrink , fetchDrinkInfo , fetchCategory } from '../API/RecipeService'

export type recipeSliceType = {
    category : CategoriesAPISchemaType
    drinksInfo : searchdrinkType[]
    getCategory: () => void
    getDrinks : ( drinks : drinkType) => Promise<void>
    getDrinkInfo: (id: string) => Promise<void>
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

       set({ 
            drinksInfo : resultado
       })

    },

    getDrinkInfo : async ( id ) => { 
        await fetchDrinkInfo( id )
    }

})