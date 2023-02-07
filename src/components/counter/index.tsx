import { useState } from "react";

export function Counter() {
    const [count,setCount] = useState(0)

    return (
        <>
            <button onClick={ () => setCount((count) => count + 1 )}>+</button>
            <h4>{count}</h4>
            <button onClick={ () => setCount((count) => count - 1 )}>-</button>
        </>
    )
}