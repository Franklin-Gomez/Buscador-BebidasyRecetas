import { NavLink } from "react-router-dom"

export default function Header() {
    return (
        <>
            <header className=" bg-bg-header">

                <div className=" container mx-auto">

                    {/* header */}
                    <div className=" flex justify-between items-center">
                
                        <img 
                            src="../public/logo.svg" 
                            alt="imagen Logo"  
                            className="w-32"
                        />
                

                        <div className=" flex gap-10">

                            <NavLink to="/"> INICIO </NavLink>
                            <NavLink to="/favoritos"> FAVORITOS </NavLink>
                        
                        </div>
                    </div>

                    {/* form */}

                    <form action="">

                    </form>
                </div>

            </header>

        
        </>

    )
}
