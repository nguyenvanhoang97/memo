import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import { fetchUsers } from './actions'

// @ts-ignore
function UsersContainer({ userData, fetchUsers } ) {
    console.log(userData)
    useEffect(() => {
        fetchUsers()
    }, [])
    return (
        <div>
            <h2>Users List</h2>
            <div>
                {
                    userData &&
                    userData.users &&
                    userData.users.map((user: any) => <p>{user.name}</p>)
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state:any) => {
    return {
        userData: state.users
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UsersContainer)