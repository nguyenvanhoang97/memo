import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers} from "./actions";

function UsersContainer ( userData: any ) {
    useEffect(() => {
        fetchUsers()
    }, [])
    return userData.loading ? (
        <h2>Loading</h2>
    ) : userData.error ? (
        <h2>{userData.error}</h2>
    ) : (
        <div>
            <h2>Users List</h2>
            <div>
                {userData &&
                userData.users &&
                userData.users.map((user:any) => <p>{user.name}</p>)}
            </div>
        </div>
    )
}

const mapStateToProps = (state:any) => {
    return {
        userData: state.user
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UsersContainer)