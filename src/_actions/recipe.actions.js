import { recipeConstants } from '../_constants';
import axios from "axios";

export const recipeActions = {
    request,
    success,
    failure,
    getRecipe
}

function request() {
    return {
        type: recipeConstants.RECIPE_REQUEST,
    }
}

function success(data) {
    return {
        type: recipeConstants.RECIPE_SUCCESS,
        payload: data
    }
}

function failure(error) {
    return {
        type: recipeConstants.RECIPE_FAILURE,
        payload: error
    }
}

function getRecipe(query) {
    return dispatch => {
        dispatch(request())
        const apiKey = "a3cc1d73eff648ff955048012275c85a"; // spoonacular
        axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${apiKey}&addRecipeInformation=true&number=9`)
            .then(response => {
                const data = response.data.results
                dispatch(success(data))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(failure(errorMsg))
            })

    }
}

