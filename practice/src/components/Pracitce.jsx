import { useState } from "react"


function ButtonWithOneState() {
    
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count+1)
    }

    return (
        <button onClick={increment} className=" bg-blue-400 px-2 py-1 rounded-md border border-white">
            count: {count}
        </button>
    )
}


function ButtonWithParentState(props) {
    
    return (
        <button onClick={props.increment} className=" bg-blue-400 px-2 py-1 rounded-md border border-white">
            count: {props.count}
        </button>
    )
}


export  {
    ButtonWithOneState,
    ButtonWithParentState
};