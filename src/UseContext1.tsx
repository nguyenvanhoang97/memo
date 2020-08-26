import React from "react";
import {UseContext} from "./App"

function UseContext2() {
    return(
        <div>
            <UseContext.Consumer>
                {
                    props => {
                        return (
                            <div>
                                <h2>{props.name}</h2>
                            </div>
                        )
                    }
                }
            </UseContext.Consumer>
        </div>
    )
}

export default UseContext2;