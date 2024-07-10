import { StateCreator } from "zustand"

type Category = {}

export type createRecipesSliceProps = { 
    categories : Category[]
}

// store de las recetas
export const createRecipesSlice : StateCreator<createRecipesSliceProps> = () => ({
    categories : []
})