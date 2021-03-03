import { recipeConstants } from '../_constants';

const initialState = {
    loading: false,
    data: [],
    error: ''
}
export function recipe(state = initialState, action) {
    switch (action.type) {
        case recipeConstants.RECIPE_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case recipeConstants.RECIPE_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        case recipeConstants.RECIPE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default: return state
    }
}