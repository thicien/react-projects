import { Link } from "react-router-dom"
import { useState } from "react"
import { Outlet,useOutletContext} from "react-router-dom"
export default function Cart() {
    const product = [{id:1,name:'shoe',price:1200},{id:2,name:'timberland',price:2900}]
    const {cart,setCart}= useOutletContext()
    function addToCart(n,p){
        setCart(prev=>{
            return [...prev,{name:n,price:p}]
        })
    }
    console.log(cart)
  return (
    <div>
      <h1>cart</h1>
      {product.map(item=>{
        return <div key={item.id}>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <button onClick={()=> addToCart(item.name,item.price)}>add to cart</button>
        </div>
      })}
      <Link to='/Checkout/Payment'>Make Payment</Link>
      <Outlet/>
    </div>
  )
}
