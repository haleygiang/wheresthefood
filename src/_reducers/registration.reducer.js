// Manages the registration section of the application state.
// On registration request it just sets a registering flag set to true which the RegisterPage uses to show the loading spinner. 
// On register success or failure it clears the registration state.

import { userConstants } from '../_constants';

export function registration(state = {}, action) {
    switch (action.type) {
        case userConstants.REGISTER_REQUEST:
            return { registering: true };
        case userConstants.REGISTER_SUCCESS:
            return {};
        case userConstants.REGISTER_FAILURE:
            return {};
        default:
            return state;
    }
}