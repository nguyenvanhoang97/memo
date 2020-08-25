import React from "react";
import {InterfaceApp3, UseContext} from "./App";

const UseContext1: React.FC<InterfaceApp3> = (()=> {
    return(
        <div>
            <UseContext.Consumer>
                {
                    props => {
                        console.log("context1")
                        return (
                            <div>
                                <h2>{props.count}</h2>
                            </div>
                        )
                    }
                }
            </UseContext.Consumer>
        </div>
    );
})

export default UseContext1;