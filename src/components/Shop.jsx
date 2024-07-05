import { useEffect, useState } from "react";
import { API_KEY, API_URL } from '../config'
import { Preloader } from "./Preloader";
import { GoodsList } from "./GoodsList";
import { Cart } from "./Cart";
import { CartList } from "./CartList";
import {Alert} from './Alert'
function Shop() {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([])
    const [isCartShow, setCartShow] = useState(false)
    const [alertName, setAlertName] = useState('')

    const addToCart = (item) => {
        const localOrder = [...order]
        const existingGood = localOrder.find(good => good.id === item.id);
        if (existingGood) {
            existingGood.quantity += 1;
        } else {
            localOrder.push({ ...item, quantity: 1 });
        }
        setOrder(localOrder)
        setAlertName(item.name)
    }
    const removeFromCart = (id) => {
        const newOrder = order.filter(el => el.id !== id)
        setOrder(newOrder)
    }
    const increaseItemNumber = (id) => {
        const newOrder = order.map(item => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity + 1 }
            } else return item
        })
        setOrder(newOrder)
    }
    const decreaseItemNumber = (id) => {
        const newOrder = order.reduce((acc, item) => {
            if (item.id === id) {
                if (item.quantity > 1) {
                    acc.push({ ...item, quantity: item.quantity - 1 });
                }
            } else {
                acc.push(item);
            }
            return acc;
        }, []);
        setOrder(newOrder)
    }
    const handleCartShow = () => {
        setCartShow(!isCartShow)
    }
    const closeAlert = () => {
        setAlertName('')
    }

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: { 'Authorization': API_KEY }
        }).then(response => response.json()).then((data) => {
            data.featured && setGoods(data.featured)
            setLoading(false)
        })
    }, []);
    return (
        <main className="container content">
            <Cart quantity={order.length} handleCartShow={handleCartShow} />
            {loading ? <Preloader /> : <GoodsList goods={goods} addToCart={addToCart} />}
            {
                isCartShow && <CartList order={order} handleCartShow={handleCartShow} removeFromCart={removeFromCart} increaseItemNumber={increaseItemNumber} decreaseItemNumber={decreaseItemNumber}/>
            }
            {
                alertName && <Alert name={alertName} closeAlert={closeAlert}/>
            }
        </main>
    )
}

export { Shop };
