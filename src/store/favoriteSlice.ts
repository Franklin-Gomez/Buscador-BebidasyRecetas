import { StateCreator } from "zustand"
import { drinkdetailType } from "../Types"

export type favoriteSliceType = { 
    favoritos : drinkdetailType[]
    
    getFavoritos : ( recipe  : drinkdetailType) => void
}

export const favoriteSlice : StateCreator<favoriteSliceType> = (set) => ({ 
    favoritos : [],

    getFavoritos : ( recipe ) => { 
        set({ 
           
        })
    }
})