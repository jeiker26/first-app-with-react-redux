import { SAVE_PRODUCT } from './actionTypes';

export function saveProducts(products)
{
    return {
        type: SAVE_PRODUCT,
        payload: products
    }
}