import React, {memo} from "react";
import {UserContext} from "./App"

const UserContext2 = memo(()=> {
    return(
        <UserContext.Consumer>
            {
                name => {
                    console.log("context2")
                    return (
                        <div>
                            <h2>{name.name}</h2>
                        </div>

                    )
                }
            }
        </UserContext.Consumer>
    );
})

export default UserContext2;