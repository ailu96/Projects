import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../redux/cartSlice";

const Cart =()=>{

    const cartItems=useSelector((store)=>store.cart.items)
    const dispatch=useDispatch();

    console.log(cartItems);

    const handleClearCart=()=>{
        dispatch(clearCart())
    }

    return (
        <div className="text-center m-10 p-10">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto">
                <button className="p-2 m-2 bg-black text-white rounded-lg ml-[760px]" onClick={handleClearCart}>Clear Cart</button>

                {cartItems.length ==0 && <h1>Cart is empty! Order Some Food</h1>}
                <ItemList items={cartItems}></ItemList>
            </div>
        </div>
    )
}
export default Cart;