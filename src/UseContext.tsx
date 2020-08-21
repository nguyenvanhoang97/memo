import React, {memo} from "react";
import {UserContext} from "./App";

const UserContext1 = memo(()=> {
    return(
        <UserContext.Consumer>
            {
                count => {
                    console.log("context1")
                    return (
                        <div>
                            <h2>{count.age}</h2>
                        </div>

                    )
                }
            }
        </UserContext.Consumer>
    );
})

export default UserContext1;