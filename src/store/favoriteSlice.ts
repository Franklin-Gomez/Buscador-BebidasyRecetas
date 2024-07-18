import { StateCreator } from "zustand"
import { drinkdetailType } from "../Types"
import { notificacionSliceType } from "./notificacionSlice"

export type favoriteSliceType = { 
    favoritos : drinkdetailType[]
    getFavoritos : ( recipe  : drinkdetailType) => void
    favoriteExists : (recipe : drinkdetailType['idDrink']) => boolean
    localFromStorage : () => void
}

export const favoriteSlice : StateCreator<favoriteSliceType & notificacionSliceType , [] , [] , favoriteSliceType> = (set,get) => ({ 
    favoritos : [],

    getFavoritos : ( recipe ) => { 

        if( get().favoriteExists( recipe.idDrink) ) { 

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

        localStorage.setItem( 'favoritos', JSON.stringify( get().favoritos) )

    },

    favoriteExists : (id)  => { 
        return get().favoritos.some(( favoritos ) => favoritos.idDrink == id )
    },

    localFromStorage : () => { 
        const storedFavorites = localStorage.getItem('favoritos')

        if( storedFavorites ) { 
            set({ 
                favoritos : JSON.parse( storedFavorites )
            })
        }

    }


})