import React from 'react'
import { createContainer,usePersistFn } from "context-state"

function useCounter(){
    const [count, setCount] = React.useState(0)
    const increment = usePersistFn(() => setCount(c => c + 1));

    return {
        count,
        increment
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
    console.log("gooooo")
    return <div>child</div>
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