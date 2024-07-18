import { Outlet } from "react-router-dom";
import Header from "./Header";
import Modal from "./Modal";
import Notification from "./Notification";
import { useAppStore } from "../store/useAppStore";
import { useEffect } from "react";

export default function Layout() {

    const localFromStorage = useAppStore((state) => state.localFromStorage)

    useEffect(() => { 
        localFromStorage()
    },[])

    return (
        
        <>

            <Header/>

            <main className="container mx-auto py-16">
                
                <Outlet/>

            </main>

            <Modal/>

            <Notification/>
        </>

    )
}
