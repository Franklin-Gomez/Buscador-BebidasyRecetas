import { searchdrinkType } from "../Types"
import { useAppStore } from "../store/useAppStore"


export default function DrinkCard( {drink} : { drink : searchdrinkType} ) {

    const getDrinkInfo = useAppStore((state) => state.getDrinkInfo)
  
    const handleClick = ( id : string) => { 
        getDrinkInfo( id )
    }

    return (
        <div 
          key={drink.idDrink}
          className="p-2"
        >
          <div className=" relative overflow-hidden rounded-lg shadow-lg ">

            <img 
              src={drink.strDrinkThumb}
              alt=" Imagen de la bebida" 
              className="transition-transform duration-500 ease-in-out hover:scale-125 "
            />

          </div>

          <p className=" font-bold p-3 text-center text-2xl"> { drink.strDrink}  </p>


          <button
            className="p-2 w-full bg-orange-500 uppercase font-bold hover:bg-orange-700 text-white"
            onClick={ () => handleClick( drink.idDrink) }

          >
            Buscar Receta
          </button>


        </div>
    )
}
