import { useEffect, useMemo , useState } from "react";
import { NavLink } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { useAppStore } from "../stores/useAppStore";

export default function Header() {


    const [ searchFilters , setSearchFilters ] = useState({
        ingredient : '',
        category : ''
    })

    const { pathname } = useLocation();

    const isHome = useMemo(() => pathname === '/' , [pathname] )

    const fetchCategories = useAppStore((state) => state.fetchCategories)
    const categories = useAppStore((state) => state.categories)

    useEffect(() => { fetchCategories() } , [])

    const handleChange = ( e : React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement> ) => { 
        setSearchFilters({
            ...searchFilters,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = () => { 
        if( Object.values( searchFilters ).includes('') ) { 
        
        }
    }


    

    return (
        <header className={isHome ? " bg-header bg-cover bg-center" : " bg-slate-800"  }>
            <div className="mx-auto container px-5 py-16">
                <div className="flex justify-between items-center">

                    <div>
                        <img src="./logo.svg" alt="logotipo" className="w-32" />
                    </div>

                    <nav className="flex gap-4">
                        <NavLink 
                            to='/'
                            className={({isActive }) => isActive ?  "text-orange-500 uppercase font-bold" : "text-white uppercase font-bold"  }
                        > Inicio </NavLink>

                        <NavLink
                            to='/favoritos'
                            className={({isActive }) => isActive ?  "text-orange-500 uppercase font-bold" : "text-white uppercase font-bold"  }
                        > Favoritos </NavLink>
                    </nav>

                </div>

                { isHome && 
                    <form 
                        action="" 
                        className="mt-10  md:w-1/2 2xl:w-1/3 bg-orange-500 p-10 rounded-lg shadow space-y-6">

                        <div className="space-y-2">
                            <label 
                                htmlFor="ingredient"
                                className="block text-white uppercase font-extrabold text-lg"

                            > Nombre o Ingredientes</label>

                            <input 
                                id="ingredient" 
                                name="ingredient"
                                className="p-3 w-full rounded-full focus:outline-none"
                                placeholder="Nombre o Ingrediente. Ej. Vodka, Tequila, Cafe"
                                type="text"
                                onChange={ handleChange }
                                value={searchFilters.ingredient}
                            />
                        </div>

                        <div className="space-y-2">
                            <label 
                                htmlFor="ingredient"
                                className="block text-white uppercase font-extrabold text-lg"

                            > Categoria</label>

                            <select
                                id="category"
                                name="category"
                                className="p-3 w-full rounded-full focus:outline-none"
                                onChange={ handleChange }
                                value={ searchFilters.category }
                                
                            > 
                                <option value=""> -- Selecciona una Categoria -- </option>

                                { categories.drinks.map (( category ) => ( 

                                    <option 

                                        value={category.strCategory}
                                        key={category.strCategory}
                                    
                                    > {category.strCategory} </option>

                                ))}
                            
                            </select>
                        </div>

                        <input 
                            type="submit" 
                            value='Buscar Recetas'
                            className="uppercase cursor-pointer bg-orange-800 hover:bg-orange-900 text-white font-extrabold w-full p-2 rounded-lg"
                        />
                    </form>
            
                }
            </div>
        </header>
    )
}
