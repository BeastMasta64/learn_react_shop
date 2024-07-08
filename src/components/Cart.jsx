import { useContext } from "react"
import { ShopContext } from "../context"

function Cart() {
    const { order, handleCartShow = Function.prototype } = useContext(ShopContext)
    return (
        <div className="cart blue darken-4 white-text" onClick={handleCartShow}>
            <i className="material-icons">shopping_cart</i>
            {order ? <span className="cart-quanity">{order.length}</span> : null}
        </div>
    )
}

export { Cart }