import React from 'react'
import {connect} from 'react-redux'

// @ts-ignore
function UsersContainer2({userData}) {
    return userData.loading ? (
        <h2>Loading</h2>
    ) : userData.error ? (
        <h2>{userData.error}</h2>
    ) : (
        <div>
            <h2>Users List2</h2>
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
        userData: state.users
    }
}

export default connect(
    mapStateToProps
)(UsersContainer2)