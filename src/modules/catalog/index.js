import { SAVE_PRODUCT } from './actionTypes';
export * from './actions';


export default function catalog(state=[], action) {
    switch (action.type) {
        case SAVE_PRODUCT:
            return action.payload;
        default:
            return state;
    }
}