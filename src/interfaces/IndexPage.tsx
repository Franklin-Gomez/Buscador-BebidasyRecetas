import { useAppStore } from "../store/useAppStore"
import DrinkCard from "../Components/DrinkCard"

export default function IndexPage() {

  const drinksInfo = useAppStore((state) => state.drinksInfo)


  return (
    <div className="grid grid-cols-3 gap-10">
      {drinksInfo.map(( drink ) => ( 

        <DrinkCard
          key={drink.idDrink}
          drink={drink}
        />

      ))}
      
    </div>
  )
}
