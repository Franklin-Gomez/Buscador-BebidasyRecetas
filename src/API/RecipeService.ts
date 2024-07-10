import axios from "axios";
import { CategoriesAPIRsponseSchema } from "../utils/recipes-schema";

export async function getCategories () { 
    
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
    
    try {

        const {data}  = await axios(url)
        const resultado = CategoriesAPIRsponseSchema.safeParse(data)
        
        if( resultado.success) { 
            return resultado.data
        }

    } catch (error) {
        console.log( error )
    }

}