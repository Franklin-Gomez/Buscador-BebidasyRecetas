import { create } from "zustand";
import { recipeSliceType , recipeSlice } from "./recipeSlice";


export const  useAppStore =  create<recipeSliceType>((...a) => ({
    ...recipeSlice(...a)
})) 