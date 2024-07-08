import { useContext } from "react"
import { ShopContext } from "../context"

function CartItem(props) {
    const {
        id,
        name,
        price,
        quantity
    } = props
    const {
        removeFromCart = Function.prototype,
        increaseItemNumber = Function.prototype,
        decreaseItemNumber = Function.prototype
    } = useContext(ShopContext)
    const increaseIcon = <i className="material-icons item-add" onClick={() => increaseItemNumber(id)}>add</i>
    const decreaseIcon = <i className="material-icons item-remove" onClick={() => decreaseItemNumber(id)}>remove</i>
    return (
        <li className="collection-item">
            {name} {increaseIcon}x{quantity}{decreaseIcon} = {price * quantity} руб.
            <span href="#!" className="secondary-content"><i className="material-icons cart-delete" onClick={() => removeFromCart(id)}>close</i></span>
        </li>

    )
}

export { CartItem }