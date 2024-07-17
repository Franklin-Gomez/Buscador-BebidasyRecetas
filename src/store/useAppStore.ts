import { create } from "zustand";
import { recipeSliceType , recipeSlice } from "./recipeSlice";
import { devtools } from "zustand/middleware";
import { favoriteSliceType , favoriteSlice} from "./favoriteSlice";

export const  useAppStore =  create<recipeSliceType & favoriteSliceType>()(
    devtools(
        ((...a) => ({
            ...recipeSlice(...a),
            ...favoriteSlice(...a)
        })),
    )
)