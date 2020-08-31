export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

const initialState = {

}

const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCESS:
            return {
                users: action.payload,
                loading: false,
                error: ''
            }
        case FETCH_USERS_FAILURE:
            return {
                ...state,
                loading: false,
                error: 'error'
            }
        default: return state
    }
}

export default reducer