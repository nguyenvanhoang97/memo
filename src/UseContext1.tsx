import React from "react";
import {InterfaceApp3, UseContext} from "./App"

const UseContext2: React.FC<InterfaceApp3> = (()=> {
    return(
        <div>
            <UseContext.Consumer>
                {
                    props => {
                        console.log("context2")
                        return (
                            <div>
                                <h2>{props.name}</h2>
                            </div>
                        )
                    }
                }
            </UseContext.Consumer>
        </div>
    );
})

export default UseContext2;