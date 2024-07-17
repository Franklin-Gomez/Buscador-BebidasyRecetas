import { StateCreator } from 'zustand'
import { CategoriesAPISchemaType , drinkType , searchdrinkType , drinkdetailType } from '../Types'
import { fetchDrink , fetchDrinkInfo , fetchCategory } from '../API/RecipeService'

export type recipeSliceType = {
    category : CategoriesAPISchemaType
    drinksInfo : searchdrinkType[]
    recipe : drinkdetailType
    modal : boolean
    getCategory: () => void
    getDrinks : ( drinks : drinkType) => Promise<void>
    getDrinkInfo: (id: string) => Promise<void>
    closeModal: () => void
}

export const recipeSlice : StateCreator<recipeSliceType> = (set) => ({ 

    category : [],

    drinksInfo : [],

    recipe : {} as drinkdetailType,

    modal : false,

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
        const resultado = await fetchDrinkInfo( id )

        set({ 
            recipe : resultado,
            modal : true
        })
    },

    closeModal : () => { 
        set({
            modal : false
        })
    }

})