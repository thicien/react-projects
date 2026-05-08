import { useOutletContext,Link } from "react-router-dom"

export default function Payment() {
    const {cart} = useOutletContext();
    console.log(cart);
  return (
    <div>
      <h1>Payment detail</h1>
      <h3>you purchased product</h3>
      {cart.map(item=>{
        return <div key={item.id}>
            <p>{item.name}  {"            "} {item.price}</p>
        </div>
      })}
      <h3>Total: 64,000 rwf</h3>
      <Link to='/checkout/Delivery' >Delivery</Link>
    </div>
  )
}
