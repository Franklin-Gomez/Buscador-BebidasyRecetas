import { StateCreator } from "zustand"
import { RecipeAPIResponse } from "../Types"

export type createFavoriteType = { 
    favorites : RecipeAPIResponse[]
    handleClickFavorite : ( recipe : RecipeAPIResponse ) => void
    favoriteExists : ( id : RecipeAPIResponse['idDrink'] ) => boolean
}

export const createFavoriteSlice : StateCreator<createFavoriteType> = ( set , get ) => ({ 
    favorites : [] , 

    handleClickFavorite : ( recipe ) =>  { 
        
        if( get().favoriteExists(recipe.idDrink) ){

            set(( state) => ({ 
                favorites : state.favorites.filter(( favorite) => favorite.idDrink !== recipe.idDrink)
            }))

        } else { 

            // set({
            //     favorites : [...get().favorites , recipe ]
            // })

            set(( state ) => ({ 
                favorites : [ ...state.favorites , recipe]
            }))
        }
    },

    favoriteExists : ( id ) => { 
        return  get().favorites.some((favorite) => favorite.idDrink == id)
    }
})