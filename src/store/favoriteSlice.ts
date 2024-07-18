import { StateCreator } from "zustand"
import { drinkdetailType } from "../Types"

export type favoriteSliceType = { 
    favoritos : drinkdetailType[]
    getFavoritos : ( recipe  : drinkdetailType) => void
}

export const favoriteSlice : StateCreator<favoriteSliceType> = (set,get) => ({ 
    favoritos : [],

    getFavoritos : ( recipe ) => { 

        // validamos si el elemento esta ya en arreglo de favoritos o no
        const updateFavorite = get().favoritos.some(( favoritos ) => favoritos.idDrink == recipe.idDrink)

        if( updateFavorite ) { 

            // eliminar elementos dobles
            set({
                favoritos : get().favoritos.filter((favoritos) => favoritos.idDrink !== recipe.idDrink)
            })
            
        }   else { 

            // agregar pro primera vez 
            set((state) => ({ 
                favoritos : [ ...state.favoritos , recipe ]
            }))
        }

    }
})