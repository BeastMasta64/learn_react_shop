export function reducer(state, { type, payload }) {
    switch (type) {
        case 'CLOSE_ALERT':
            return {
                ...state,
                alertName: ''
            }
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                order: state.order.filter(el => el.id !== payload.id)
            }
        case 'ADD_TO_CART':
            let newOrder = [...state.order]
            const existingGood = newOrder.find(good => good.id === payload.id)
            if (existingGood) {
                existingGood.quantity += 1
            } else {
                newOrder.push({ ...payload, quantity: 1 })
            }
            return {
                ...state,
                order: newOrder,
                alertName: payload.name
            }
        case 'INCREASE_ITEM_NUMBER':
            return {
                ...state,
                order: state.order.map(item => {
                    if (item.id === payload.id) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else return item
                })
            }
        case 'DECREASE_ITEM_NUMBER':
            return {
                ...state,
                order: state.order.reduce((acc, item) => {
                    if (item.id === payload.id) {
                        if (item.quantity > 1) {
                            acc.push({ ...item, quantity: item.quantity - 1 });
                        }
                    } else {
                        acc.push(item);
                    }
                    return acc;
                }, [])
            }
        case 'HANDLE_CART_SHOW':
            return {
                ...state,
                isCartShow: !state.isCartShow
            }
        case 'SET_GOODS':
            return {
                ...state,
                loading: false,
                goods: payload || []
            }
        default:
            return state;
    }
}