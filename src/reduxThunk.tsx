import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import { fetchUsers } from './actions'
import UsersContainer2 from "./thunkRedux2";
import {Link} from "react-router-dom";

// @ts-ignore
function UsersContainer({ fetchUsers } ) {
    useEffect(() => {
        fetchUsers()
    }, [])
    return (
        <div>
            <div style={{backgroundColor: ''}}>
                <h2>Users List</h2>

                <Link to="/redux2">About</Link>
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