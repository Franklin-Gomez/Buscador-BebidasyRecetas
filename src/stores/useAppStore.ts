import { create } from "zustand";
import { createRecipesSlice , createRecipesSliceProps} from "./recipeSlice";
import { devtools } from "zustand/middleware";

export const useAppStore = create<createRecipesSliceProps> () (
    devtools(
        ( (...a) => ({ 
            ...createRecipesSlice(...a)
        }))
    )
)