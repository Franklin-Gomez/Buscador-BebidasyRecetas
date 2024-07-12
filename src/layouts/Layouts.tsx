import { Outlet } from "react-router-dom"
import Header from "../Components/Header"
import Modal from "../Components/Modal"
import { useEffect } from "react"
import { useAppStore } from "../stores/useAppStore"

export default function Layouts() {
  
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

    </>

  )
}
