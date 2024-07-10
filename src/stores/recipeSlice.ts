import { StateCreator } from "zustand"
import { getCategories } from "../API/RecipeService"
import { Categories } from "../Types"

export type createRecipesSliceProps = { 
    categories : Categories
    fetchCategories: () => Promise<void>
}

// store de las recetas
export const createRecipesSlice : StateCreator<createRecipesSliceProps> = (set) => ({
    categories : {
        drinks : []
    } , 
    
    fetchCategories : async () => { 
        const categorias = await getCategories();

        set({
            categories : categorias
        })

    }
})