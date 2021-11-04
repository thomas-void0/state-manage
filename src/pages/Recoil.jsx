import React from 'react'
import { atom,useSetRecoilState,useRecoilValue } from "recoil"

const COUNT = atom({
  key:"COUNT",
  default:0
})

const Child1 = () => {
  console.log("child1 run")
  const dispatchAction = useSetRecoilState(COUNT)
  const handleUpdate = () =>{
    dispatchAction(Math.random())
  }
  return <div>
    <span>child1:</span>
    <button onClick={handleUpdate}>update</button>
  </div>
}

const Child2 = () => {
  console.log("child2 run")
  const count = useRecoilValue(COUNT)
  return <div>child2:{count}</div>
}


const Child3 = () => {
  console.log("child3 run")
  return <div>child3:</div>
}

const Parent = ()=>{
  console.log("parent run")
  return (
    <div>
      <h1 style={{marginTop:"40px"}}>recoil demo</h1>
      <Child1 />
      <Child2 />
      <Child3 />
    </div>
  )

}

export default Parent