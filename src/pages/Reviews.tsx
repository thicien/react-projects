import { useOutletContext } from "react-router-dom"

export default function Reviews() {
    const {cart, delivery} = useOutletContext()
    console.log(cart)
    console.log(delivery)
  return (
    <div>
      <h1>Here is your Review</h1>
      <h4>Cart</h4>
      {cart.map(item=>{
        return <div key={item.id}>
          {item.name}
        </div>
      })}
      <h2>your location {delivery.location} your telephone {delivery.telephone}</h2>
    </div>
  )
}
