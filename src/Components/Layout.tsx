import { Outlet } from "react-router-dom";
import Header from "./Header";
import Modal from "./Modal";

export default function Layout() {
    return (
        
        <>

            <Header/>

            <main className="container mx-auto py-16">
                
                <Outlet/>

            </main>

            <Modal/>
        </>

    )
}
