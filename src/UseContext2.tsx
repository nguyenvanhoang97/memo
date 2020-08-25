import React, {useMemo} from "react";
import {InterfaceApp3} from "./App";
import UseContext2 from "./UseContext1";
import UseContext1 from "./UseContext";

const UseContext3: React.FC<InterfaceApp3> = (({name, count})=> {
    console.log(count)
    const useMemo1 = useMemo(() => <UseContext1 name={name} count={count} />, [count])
    const useMemo2 = useMemo(() => <UseContext2 name={name} count={count} />, [name])

    return(
        <div>
            {useMemo1}
            {useMemo2}
        </div>
    );
})

export default UseContext3;