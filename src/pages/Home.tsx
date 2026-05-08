import { Link, Outlet } from "react-router-dom"
export default function Home() {
  return (
    <div>
      <h2>Home page</h2>
      <Link to="Cart">Go to Our shop</Link>
      <Outlet/>
    </div>
  )
}
