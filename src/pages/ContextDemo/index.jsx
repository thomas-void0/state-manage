import React from 'react'

const context = React.createContext({})
const { Provider } = context

const reducer = (_,data) => {
    return {count:data}
}

function Child1() {
    console.log("child1 执行")
    const store = React.useContext(context)
    const { count,dispath } = store

    const handleClick = () => {
        dispath(count + 1)
    }
    return (
        <h1 onClick={handleClick}>child1:{count}</h1>
    )
}

function Child2() {
    console.log("child2 执行")
   
    return (
        <h1>child2</h1>
    )
}

const Parent = ()=>{
    console.log("parent")

    const [{count}, dispath] = React.useReducer(reducer, { count: 0 })

    return (
        <Provider value={{ count,dispath }}>
            <Child1/>
            <Child2 />
        </Provider>
    )
}

// props children demo

// const PContainer = ({children}) => {
//     const [{count}, dispath] = React.useReducer(reducer, { count: 0 })

//    return <Provider value={{ count,dispath }}>{children}</Provider>
// }


// const Child3 = () => {
//     return (
//         <PContainer>
//             <Child1 />
//             <Child2 />
//         </PContainer>        
//     )
// }

export default Parent