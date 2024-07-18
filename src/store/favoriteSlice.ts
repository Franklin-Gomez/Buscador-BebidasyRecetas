import { StateCreator } from "zustand"
import { drinkdetailType } from "../Types"
import { notificacionSliceType } from "./notificacionSlice"

export type favoriteSliceType = { 
    favoritos : drinkdetailType[]
    getFavoritos : ( recipe  : drinkdetailType) => void
}

export const favoriteSlice : StateCreator<favoriteSliceType & notificacionSliceType , [] , [] , favoriteSliceType> = (set,get) => ({ 
    favoritos : [],

    getFavoritos : ( recipe ) => { 

        // validamos si el elemento esta ya en arreglo de favoritos o no
        const updateFavorite = get().favoritos.some(( favoritos ) => favoritos.idDrink == recipe.idDrink)

        if( updateFavorite ) { 

            // eliminar elementos dobles
            set({
                favoritos : get().favoritos.filter((favoritos) => favoritos.idDrink !== recipe.idDrink)
            })

            get().showNotificacion({
                text : 'Eliminado de Favoritos',
                error : true
            })

            setTimeout(() => {
                get().closeNotificacion()
            }, 3000);

        
            
        }   else { 

            // agregar pro primera vez 
            set((state) => ({ 
                favoritos : [ ...state.favoritos , recipe ],
            }))

            get().showNotificacion({
                text : 'Guardado a Favoritos',
                error : false
            })

            setTimeout(() => {
                get().closeNotificacion()
            }, 3000);
        }

    }
})