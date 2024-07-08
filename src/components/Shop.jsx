import { useEffect, useContext } from "react";
import { API_KEY, API_URL } from '../config'
import { Preloader } from "./Preloader";
import { GoodsList } from "./GoodsList";
import { Cart } from "./Cart";
import { CartList } from "./CartList";
import { Alert } from './Alert'

import { ShopContext } from '../context'

function Shop() {
    const { loading, isCartShow, alertName, setGoods } = useContext(ShopContext)
    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: { 'Authorization': API_KEY }
        }).then(response => response.json()).then((data) => {
            setGoods(data.featured)
        })
    }, [setGoods]);
    return (
        <main className="container content">
            <Cart />
            {loading ? <Preloader /> : <GoodsList />}
            {
                isCartShow && <CartList />
            }
            {
                alertName && <Alert />
            }
        </main>
    )
}

export { Shop };
