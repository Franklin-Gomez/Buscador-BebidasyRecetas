import { create } from "zustand";
import { createRecipesSlice , createRecipesSliceProps} from "./recipeSlice";

export const useAppStore = create<createRecipesSliceProps> ( (...a) => ({ 
    ...createRecipesSlice(...a)
}))