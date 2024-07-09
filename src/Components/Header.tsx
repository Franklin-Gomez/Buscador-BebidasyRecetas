import { NavLink } from "react-router-dom"
import { useLocation } from "react-router-dom"

export default function Header() {

    const loading = useLocation();

    console.log( loading )

    return (
        <header className="bg-slate-800">
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
            </div>
        </header>
    )
}
