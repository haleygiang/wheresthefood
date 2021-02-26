// Manages the users section of the application state which is used by the HomePage 
// to display a list of users and enable deleting of users.

import { userConstants } from '../_constants';

export function users(state = {}, action) {
    switch (action.type) {
        case userConstants.GET_ALL_REQUEST:
            return { loading: true };
        case userConstants.GET_ALL_SUCCESS:
            return { items: action.users };
        case userConstants.GET_ALL_FAILURE:
            return { error: action.error };

        case userConstants.DELETE_REQUEST:
            // add 'deleting:true' property to user being deleted
            return {
                ...state,
                items: state.items.map(user => user.id === action.id ? { ...user, deleting: true } : user)
            };
        case userConstants.DELETE_SUCCESS:
            // remove 'deleting:true' property and add 'deleteError:[error]' property to user 
            return {
                ...state,
                items: state.items.map(user => {
                    if (user.id === action.id) {
                        // make copy of user without 'deleting:true' property
                        const { deleting, ...userCopy } = user;
                        // return copy of user with 'deleteError:[error]' property
                        return { ...userCopy, deleteError: action.error };
                    }
                    return user;
                })
            };

        default:
            return state
    }
}