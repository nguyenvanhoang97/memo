import React from "react";
import {UseContext} from "./App"
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "./actions";

function UseContext1() {
    const counter = useSelector((state: any)=> state.counter)
    const dispatch = useDispatch()

    return(
        <div>
            <div>
                <h2>Counter {counter}</h2>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>
            <UseContext.Consumer>
                {
                    props => {
                        return (
                            <div>
                                <h2>{props.count}</h2>
                            </div>
                        )
                    }
                }
            </UseContext.Consumer>
        </div>
    )
}

export default UseContext1;