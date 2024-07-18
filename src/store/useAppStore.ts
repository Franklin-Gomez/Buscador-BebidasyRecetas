import { create } from "zustand";
import { recipeSliceType , recipeSlice } from "./recipeSlice";
import { devtools } from "zustand/middleware";
import { favoriteSliceType , favoriteSlice} from "./favoriteSlice";
import { notificacionSliceType , notificacionSlice } from "./notificacionSlice";

export const  useAppStore =  create<recipeSliceType & favoriteSliceType & notificacionSliceType>()(
    devtools(
        ((...a) => ({
            ...recipeSlice(...a),
            ...favoriteSlice(...a),
            ...notificacionSlice(...a)
        })),
    )
)