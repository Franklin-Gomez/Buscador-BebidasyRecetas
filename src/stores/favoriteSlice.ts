import { StateCreator } from "zustand"
import { RecipeAPIResponse } from "../Types"

export type createFavoriteType = { 
    favorites : RecipeAPIResponse[]
    handleClickFavorite : ( recipe : RecipeAPIResponse ) => void
}

export const createFavoriteSlice : StateCreator<createFavoriteType> = ( set , get ) => ({ 
    favorites : [] , 

    handleClickFavorite : ( recipe ) =>  { 
        
        if( get().favorites.some((favorite) => favorite.idDrink == recipe.idDrink )){

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
    }
})