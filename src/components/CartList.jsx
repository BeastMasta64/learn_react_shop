import { CartItem } from "./CartItem"

function CartList(props) {
    const { 
        order = [], 
        handleCartShow = Function.prototype, 
        removeFromCart = Function.prototype,
        increaseItemNumber = Function.prototype,
        decreaseItemNumber = Function.prototype
    } = props

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity
    }, 0)

    return (
        <ul className="collection cart-list">
            <li className="collection-item active">Корзина</li>
            {
                order.length ? order.map(item => (
                    <CartItem key={item.id} {...item} removeFromCart={removeFromCart} increaseItemNumber={increaseItemNumber} decreaseItemNumber={decreaseItemNumber}/>
                )) : <li className="collection-item">Корзина пуста</li>
            }
            <li className="collection-item active">Общая стоимость: {totalPrice} руб.</li>
            <li className="material-icons cart-close" onClick={handleCartShow}>close</li>
        </ul>
    )
}

export { CartList }