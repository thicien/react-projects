import { Navigate, Outlet, useOutletContext } from "react-router-dom";

type CartItem = {
    name: string;
    price: number;
}

type OutletcontextType = {
    cart: CartItem[];
   setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
}
export default function ProtectedPayment() {
    const { cart } = useOutletContext<OutletcontextType>();
    console.log(cart)
    const isAuth = true
    if (!isAuth) {
        return <Navigate to='/checkout/Cart' replace /> 
    }
    return <Outlet />;
}