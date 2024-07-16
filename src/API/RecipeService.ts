import axios from "axios"
import { CategoryAPISchema } from "../Schemas/recipeSchemas"


export const fetchCategory = async () => { 

    const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"

    try {
        
        const {data} = await axios(url)
        const resultado = CategoryAPISchema.safeParse(data)
        
        if( resultado.success ) { 
            return resultado.data.drinks
        }

    } catch (error) {

        console.log(error)

    }
}