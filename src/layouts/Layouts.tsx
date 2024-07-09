import { Outlet } from "react-router-dom"
import Header from "../Components/Header"

export default function Layouts() {
  return (

    <>
        <Header/>

        <main className="container mx-auto py-16">

            <Outlet/>

        </main>

    </>

  )
}
