import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from "./actions";

function UsersContainer (userData: any) {
    useEffect(() => {
        fetchUsers()
    }, [userData])
    return (
        <div>
            <h2>Users List</h2>
            <div>
                {}
            </div>
        </div>
    )
}

const mapStateToProps = (state:any) => {
    console.log(state.users)
    return {
        userData: state.users
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