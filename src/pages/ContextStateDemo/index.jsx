import React from 'react'
import { createContainer,usePersistFn } from "context-state"

function useCounter(){
    const [count, setCount] = React.useState(0)
    const [status, setStatus2] = React.useState("init")
    const increment = usePersistFn(() => setCount(c => c + 1))
    const setStatus = usePersistFn((val) => setStatus2(val))

    return {
        status,
        count,
        increment,
        setStatus
    }
}

const CounterContainer = createContainer(useCounter)

const { Provider } = CounterContainer

const CounterDisplay = () => {
    const { count,increment } = CounterContainer.usePicker(['count','increment'])
    console.log("display")
    return (
        <div>
            {count}
            <button onClick={increment}>
                ADD
            </button>
        </div>
    )
}

const Child = () => {
    const { status,setStatus } = CounterContainer.usePicker(['status','setStatus'])
    
    console.log("gooooo")
    return <div onClick={() => setStatus(Math.random())}>child:{status}</div>
}


const ContextStateDemo = ()=>{

    return (
        <Provider>
            <CounterDisplay />
            <Child />
        </Provider>
    )

}

export default ContextStateDemo