import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const ShopContext = createContext()

const initialState = {
    goods: [],
    loading: true,
    order: [],
    isCartShow: false,
    alertName: ''
}

export const ContextProvider = ({ children }) => {
    const [value, dispatch] = useReducer(reducer, initialState)

    value.closeAlert = () => {
        dispatch({type: 'CLOSE_ALERT'})
    }
    value.removeFromCart = (id) => {
        dispatch({type: 'REMOVE_FROM_CART', payload: {id: id}})
    }
    value.addToCart = (item) => {
        dispatch({type: 'ADD_TO_CART', payload: item})
    }
    value.increaseItemNumber = (id) => {
        dispatch({type: 'INCREASE_ITEM_NUMBER', payload: {id: id}})
    }
    value.decreaseItemNumber = (id) => {
        dispatch({type: 'DECREASE_ITEM_NUMBER', payload: {id: id}})
    }
    value.handleCartShow = (id) => {
        dispatch({type: 'HANDLE_CART_SHOW', payload: {id: id}})
    }
    value.setGoods = (data) => {
        dispatch({type: 'SET_GOODS', payload: data})
    }
    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}