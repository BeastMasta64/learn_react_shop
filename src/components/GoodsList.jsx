import { GoodsItem } from "./GoodsItem"

function GoodsList(props) {
    const { goods = [], addToCart } = props

    if (!goods.length) {
        return <h3>Nothing here</h3>
    }

    return <div className="goods">
        {goods.map((item, index) => (
            <GoodsItem key={index} {...item} id={item.id + '_' + index} addToCart={addToCart} />)
        )}
    </div>
}

export { GoodsList }