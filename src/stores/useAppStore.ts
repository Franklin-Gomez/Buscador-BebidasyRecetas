import { create } from "zustand";
import { createRecipesSlice , createRecipesSliceProps} from "./recipeSlice";
import { devtools } from "zustand/middleware";
import { createFavoriteSlice , createFavoriteType } from "./favoriteSlice";
import { notificacionSlice, notificacionSliceType } from "./notificacionSlice";

export const useAppStore = create<createRecipesSliceProps & createFavoriteType & notificacionSliceType> () (
    devtools(
        ( (...a) => ({ 
            ...createRecipesSlice(...a),
            ...createFavoriteSlice(...a),
            ...notificacionSlice(...a)
        })),
    )
)