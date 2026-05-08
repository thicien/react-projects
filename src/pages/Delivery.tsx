import { useState } from "react"
import { useOutletContext } from "react-router-dom"
import { Link } from "react-router-dom"
export default function Delivery() {
    const {delivery,setDelivery} =useOutletContext()
    const [tel,setTel]= useState('')
    const [phone,setPhone]= useState('')
    function saveDelivary(){
      setDelivery({location:tel,telephone:phone})
    }
  return (
    <div>
      <label htmlFor="location">Your location </label> <br />
      <input type="text" onChange ={(e)=> setTel(e.currentTarget.value)} value={tel}/><br />
      <label htmlFor="telephone">Your phone number </label>
      <br />
      <input type="text" onChange ={(e)=> setPhone(e.currentTarget.value)} value={phone}/>
      <br />
      <br />
      <button onClick={saveDelivary}>Save Delivery info</button><br />
      <Link to='/Checkout/Reviews' >Review</Link>
    </div>
  )
}
