import { ADD_TO_PRODUCT, CHANGE_QUANTITY, EMPTY_CART } from './actionTypes';

export function addToCart(product) {
    return {
        type: ADD_TO_PRODUCT,
        product
    }
}

export function changeQuantity(product, quantity) {
    return {
        type: CHANGE_QUANTITY,
        product,
        quantity
    }
}

export function emptyCart() {
    return {
        type: EMPTY_CART
    }
}