import React from 'react'
import { atom, useRecoilState,useRecoilValueLoadable,selector } from "recoil"
import Child2 from './child2'
import Child1 from './child1'

const countState = atom({
    key: "countState",
    default: selector({
        key: 'CurrentUserID/Default',
        get: () => setTimeout(()=>0,1000),
    }),
})

const Parent = ()=>{
    console.log("recoil parent")
    const [count, setCount] = useRecoilState(countState)
    const loadable = useRecoilValueLoadable(countState)

    console.log(loadable)
    
    const handleClick = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <h1>recoil demo</h1>
            <button onClick={handleClick}>数字+</button>
            <Child1 countState={countState}/>
            <Child2 />
        </div>
    )

}

export default Parent