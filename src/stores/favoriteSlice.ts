import { StateCreator } from "zustand"
import { RecipeAPIResponse } from "../Types"
import { createRecipesSlice, createRecipesSliceProps } from "./recipeSlice"

export type createFavoriteType = { 
    favorites : RecipeAPIResponse[]
    handleClickFavorite : ( recipe : RecipeAPIResponse ) => void
    favoriteExists : ( id : RecipeAPIResponse['idDrink'] ) => boolean
    localFromStorage : () => void
}

export const createFavoriteSlice : StateCreator<createFavoriteType & createRecipesSliceProps , [] , [] , createFavoriteType > = ( set , get , api) => ({ 
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

        createRecipesSlice( set , get , api).closeModal()
        localStorage.setItem('favorites' , JSON.stringify(get().favorites)) 
    },

    favoriteExists : ( id ) => { 
        return  get().favorites.some((favorite) => favorite.idDrink == id)
    },

    localFromStorage : () => { 
        const storedFavorites = localStorage.getItem('favorites')

        if( storedFavorites ) { 
            set({ 
                favorites : JSON.parse(storedFavorites)
            })
        }
    }
})