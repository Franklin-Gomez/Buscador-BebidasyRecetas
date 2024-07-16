import { create } from "zustand";
import { recipeSliceType , recipeSlice } from "./recipeSlice";
import { devtools } from "zustand/middleware";

export const  useAppStore =  create<recipeSliceType>()(
    devtools(
        ((...a) => ({
            ...recipeSlice(...a)
        })),
    )
)