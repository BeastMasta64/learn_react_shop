function Cart(props) {
    const { quantity = 0, handleCartShow = Function.prototype } = props
    return (
        <div className="cart blue darken-4 white-text" onClick={handleCartShow}>
            <i className="material-icons">shopping_cart</i>
            {quantity ? <span className="cart-quanity">{quantity}</span> : null}
        </div>
    )
}

export { Cart }