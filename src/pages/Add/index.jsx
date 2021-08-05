import { useRecoilState,useRecoilValue } from "recoil"
import { counterState,selectorState } from "../../store/add"

const Counter = () => {

    const [count, setCount] = useRecoilState(counterState)
    const [sVal] = useRecoilState(selectorState)
    
    const handleClick = () => {
        setCount(count+1)
    }

    return (
        <div>
            <span>{count}</span>
            <h1>{sVal}</h1>
            <button onClick={handleClick}>+</button>
        </div>
    )

}

export default Counter