import DrinkCard from "../Components/DrinkCard"
import { useAppStore } from "../store/useAppStore"


export default function FavoritePage() {

  const favoritos = useAppStore(( state ) => state.favoritos)

  return (
    <div className=" grid grid-cols-3 gap-4">
      {favoritos.map((drink) => (

        <DrinkCard
          drink={drink}
        />

      ))}
    </div>
  )
}

