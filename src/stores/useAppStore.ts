import { create } from "zustand";
import { createRecipesSlice , createRecipesSliceProps} from "./recipeSlice";
import { devtools } from "zustand/middleware";
import { createFavoriteSlice , createFavoriteType } from "./favoriteSlice";

export const useAppStore = create<createRecipesSliceProps & createFavoriteType> () (
    devtools(
        ( (...a) => ({ 
            ...createRecipesSlice(...a),
            ...createFavoriteSlice(...a),
        })),
    )
)