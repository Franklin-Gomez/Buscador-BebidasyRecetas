import axios from "axios"
import { CategoryAPISchema, drinkdetailSchema, searchdrinksSchema } from "../Schemas/recipeSchemas"
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
        const resultado = searchdrinksSchema.safeParse( data )

        if( resultado.success ) { 
            return resultado.data.drinks
        }

    } catch (error) {
        console.log( error )
    }

}

export const fetchDrinkInfo = async ( id : string ) => { 

    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`

    try {
        
        const {data}  = await axios ( url )
        const resultado = drinkdetailSchema.safeParse( data.drinks[0])
        
        if( resultado.success ) { 
            return resultado.data
        }

    } catch (error) {
        console.log( error )
    }
}