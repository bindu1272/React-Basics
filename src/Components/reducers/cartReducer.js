"use strict"

const cartReducer = (state={cart:[]},action)=>{
    switch(action.type){
        case "ADD_TO_CART":
            return{
                ...state,
                cart:[...state.cart,action.payload],
                totalAmount: totals([...state.cart, action.payload]),
                totalQuantity: totalQuantity([...state.cart, action.payload])
            }
            break;
        case "UPDATE_CART_ITEM":
            const currentCartToUpdate = [...state.cart];
            const indexToUpdate = currentCartToUpdate.findIndex((cart) => {
                return cart._id === action.payload._id;
            })
            // const newCartToUpdate = {
            //     ...currentCartToUpdate[indexToUpdate],
            //     _id: action.payload.update_id
            // }
            currentCartToUpdate[indexToUpdate].quantity = currentCartToUpdate[indexToUpdate].quantity + action.payload.unit;
            return {
                // cart: [...currentCartToUpdate.slice(0, indexToUpdate), newCartToUpdate, ...currentCartToUpdate.slice(indexToUpdate + 1)]
                ...state,
                cart : [...currentCartToUpdate],
                totalAmount: totals(currentCartToUpdate),
                totalQuantity: totalQuantity(currentCartToUpdate)
            }
            break;
        case "DELETE_CART_ITEM":
            let currentCartToDelete = [...state.cart];
            const indexToDelete = currentCartToDelete.findIndex((cart) => {
                return cart._id === action.payload._id;
            })
            const cart =  [...currentCartToDelete.slice(0, indexToDelete), ...currentCartToDelete.slice(indexToDelete + 1)]
            return {
                ...state,
                cart: cart,
                totalAmount: totals(cart),
                totalQuantity: totalQuantity(currentCartToDelete)
            }
            break;
    }
    return state;
}
export const totals = (carts)=>{
    const totalAmount = carts.map(cart=>{
        return cart.price * cart.quantity
    }).reduce((a,b)=>{
        return a + b
    },0)

    return totalAmount.toFixed(2)
}

export const totalQuantity = (carts) => {
    console.log(carts);
    const totalQuantity = carts.map(cart => {
        return cart.quantity
    }).reduce((a, b) => {
        return a + b
    }, 0)

    return totalQuantity;
}

export default cartReducer;