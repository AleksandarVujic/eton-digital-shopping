import { ADD_ITEM, DELETE_ITEM } from './actionTypes';

// add new item product to shopping cart
export const addItemToCart = (id) => {
    return {
        type: ADD_ITEM,
        id
    }
}

// delete item product from shopping cart
export const deleteItemFromCart = (id) => {
    return {
        type: DELETE_ITEM,
        id
    }
}