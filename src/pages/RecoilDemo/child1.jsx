import { useRecoilValue } from "recoil"

function Child1({countState}) {
    const count = useRecoilValue(countState)
    console.log("recoil child1 执行")
    return (
        <h1>child1:{count}</h1>
    )
}

export default Child1