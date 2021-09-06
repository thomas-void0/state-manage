import { useState } from "react"
import { atom,selector,useRecoilValue,useRecoilState } from "recoil"

// 所有信息列表
const ALL_LIST_STATE = atom({ key:"ALL_LIST_STATE",default:[] })

// 被删除的列表
const DEL_LIST_STATE = selector({
    key:"DEL_LIST_STATE",
    get:({get})=>{
        const allList = get(ALL_LIST_STATE)
        return allList.filter(item=>item.flag === "del") 
    }
})

// 待办的列表
const ACTIVE_LIST_STATE = selector({
    key:"ACTIVE_LIST_STATE",
    get:({get})=>{
        const allList = get(ALL_LIST_STATE)
        return allList.filter(item=>item.flag === "active")
    }
})

// 完成的列表
const COMPLETE_LIST_STATE = selector({
    key:"COMPLETE_LIST_STATE",
    get:({get})=>{
        const allList = get(ALL_LIST_STATE)
        return allList.filter(item=>item.flag === "complete")
    }
})

// 完成的列表
const CompleteList = () =>{
    const data = useRecoilValue(COMPLETE_LIST_STATE)
    return (
        <div style={{border:"1px solid pink",width:"250px"}}>
            <h1>完成：</h1>
            <ul>
                {data.map(item=><li key={item.key}>{item.title}</li>)}
            </ul>            
        </div>
    )
}

// 激活列表
const AcitveList = () =>{
    const data = useRecoilValue(ACTIVE_LIST_STATE)
    return (
        <div style={{border:"1px solid black",width:"250px"}}>
            <h1>待完成：</h1>
            <ul>
                {data.map(item=><li key={item.key}>{item.title}</li>)}
            </ul>            
        </div>
    )
}

// 删除列表
const DelItemList = () =>{
    const data = useRecoilValue(DEL_LIST_STATE)
    return (
        <div style={{border:"1px solid blue",width:"250px"}}>
            <h1>删除：</h1>
            <ul>
                {data.map(item=><li key={item.key}>{item.title}</li>)}
            </ul>            
        </div>
    )
}

// 所有列表
const ALLItemList = () =>{
    const [data,setData] = useRecoilState(ALL_LIST_STATE);

    const handleComplete = (key) =>{
        const _data = data.map(item=>({...item}))
        const obj = _data.find(item=>item.key === key)
        obj.flag = "complete"
        setData(_data)
    }

    const handleDel = (key) =>{
        const _data = data.map(item=>({...item}))
        const obj = _data.find(item=>item.key === key)
        obj.flag = "del"
        setData(_data)
    }

    const isDisabled = (flag) => flag === "complete" || flag === "del" 

    return (
        <div style={{border:"1px solid red",width:"250px"}}>
            <h1>所有：</h1>
            <div>
                {data.map(item=>(
                    <div key={item.key} style={{display:"flex",justifyContent:"space-between"}}>
                        <div>{item.title}</div>
                        <div>
                            <button 
                                disabled={isDisabled(item.flag)} 
                                onClick={()=>handleComplete(item.key)}
                            >
                                完成
                            </button>
                            <button 
                                disabled={isDisabled(item.flag)} 
                                onClick={()=>handleDel(item.key)}
                            >
                                删除 
                            </button>
                        </div>
                    </div>
                ))}
            </div>            
        </div>
    )
}


const TodoList = () =>{
    const [list,setList] = useRecoilState(ALL_LIST_STATE);
    const [value, setValue] = useState('');

    const handleAdd = () =>{
        if(!value) return
        const _list = [...list]
        _list.push({ key:Date.now(), title:value, flag:"active" })
        setList(_list)
    }

    const onInputValueChange = e => setValue(e.target.value)

    return (
        <>
            <div style={{display:"flex"}}>
                <ALLItemList />
                <CompleteList />
                <AcitveList />
                <DelItemList />
            </div>

            <div style={{marginTop:"30px"}}>
                <input 
                    placeholder="请输入需要添加的待办事项" 
                    value={value} 
                    onChange={onInputValueChange}
                />
                <button onClick={handleAdd}>添加</button>
            </div>
        </>
    )
}

export default TodoList