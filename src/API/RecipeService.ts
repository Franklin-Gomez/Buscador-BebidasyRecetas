import axios from "axios"
import { CategoryAPISchema, searchdrinksSchema } from "../Schemas/recipeSchemas"
import { drinkType } from "../Types"


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

export const fetchDrink = async ( drinks : drinkType) => { 
    const { Ingredient , category } = drinks 
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}&i=${Ingredient}`

    try {

        const { data } = await axios( url )
        console.log( data)
        const resultado = searchdrinksSchema.safeParse( data )

        if( resultado.success ) { 
            return resultado.data.drinks
        }

    } catch (error) {
        console.log( error )
    }

}