
import { Outlet } from "react-router-dom"
import { useState } from "react"
export default function Layout() {
    const [cart,setCart] = useState([])
    const [delivery,setDelivery] = useState([])
  return (
<>
    <Outlet context={{cart,setCart,delivery,setDelivery}} />
</>

  )
}
