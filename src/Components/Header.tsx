import { NavLink } from "react-router-dom"

export default function Header() {
    return (
        <>
            <header className=" bg-bg-header bg-center bg-no-repeat bg-cover">

                <div className=" container mx-auto py-10">

                    {/* header */}
                    <div className=" flex justify-between items-center">
                
                        <img 
                            src="../public/logo.svg" 
                            alt="imagen Logo"  
                            className="w-32"
                        />
                

                        <div className=" flex gap-10 text-white font-bold">

                            <NavLink 
                                to="/"
                                className={ ({ isActive }) =>
                                    isActive ? " text-orange-500" : "text-white" 
                                }
                            > INICIO </NavLink>


                            <NavLink 
                                to="/favoritos"
                                className={ ({ isActive }) =>
                                    isActive ? " text-orange-500" : "text-white" 
                                }
                            > FAVORITOS </NavLink>
                        
                        </div>
                    </div>

                    {/* form */}

                    <form action="" className=" mt-20 p-10 w-1/2 space-y-6 bg-orange-500 font-bold uppercase rounded-lg ">

                        <div className="  grid gap-y-4">
                            <label htmlFor="Ingredient" className="text-white"> Nombre o Ingredientes </label>
                            <input 
                                type="text"
                                id="Ingredient"
                                placeholder="Nombre o Ingrediente. Ej: Vodka , Tequila "
                                className=" rounded-lg p-2"
                            />
                        </div>

                        <div className=" grid gap-y-4">
                            <label htmlFor="category" className="text-white">Categoria</label>
                            <select 
                                name="category" 
                                id="category"
                                className=" rounded-lg p-2 text-gray-400"
                                
                            >

                                <option value=""> --Seleccione una Categoria-- </option>

                            </select>
                        </div>

                        <input 
                            type="submit" 
                            value={"Buscar Recetas"} 
                            className=" bg-orange-700  text-white font-bold uppercase rounded-lg border-none px-8 py-4 w-full mt-6"
                        />

                    </form>
                </div>

            </header>

        
        </>

    )
}
