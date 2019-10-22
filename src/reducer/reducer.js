import { ADD_ITEM, DELETE_ITEM } from '../action/actionTypes';
import products from '../db/products';

// reducer
const initialState = {
    items: products,
    addedItems: [],
    totalPrice: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            let addedItem = state.items.find(item => item.id === action.id);
            let newTotalPrice = state.totalPrice + addedItem.price;
            //check if the item already exist in cart
            let exist = state.addedItems.find(item => action.id === item.id);
            // if exists can't add more products in cart 
            // return only products that are already there and it's price
            if (exist) {
                return {
                    ...state,
                    totalPrice: state.totalPrice
                }
            }
            return {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                totalPrice: newTotalPrice
            }
        case DELETE_ITEM:
            let itemToRemove = state.addedItems.find(item => action.id === item.id);
            let new_items = state.addedItems.filter(item => action.id !== item.id);
            // calc the totalPrice
            let newTotal = state.totalPrice - itemToRemove.price;
            return {
                ...state,
                addedItems: new_items,
                totalPrice: newTotal
            }
        default:
            return state

    };
}

export default reducer;