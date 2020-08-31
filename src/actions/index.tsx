import axios from 'axios'
import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE
} from './../reducers/getAllUsers';

export const increment = () => {
    return (dispatch: any) => {
        setTimeout(() => {
            dispatch({
                type: 'INCREMENT'
            })
        }, 2000)
    }
}

export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}

export const fetchUsers = () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                const users = response.data
                fetchUsersSuccess(users)
            })
            .catch(error =>
                error
            )

}

export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

export const fetchUsersSuccess = (users: any) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

export const fetchUsersFailure = (error: any) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}