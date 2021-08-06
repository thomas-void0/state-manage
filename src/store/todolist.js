import { atom,selector } from "recoil"

export const textState = atom({
    key: "todo_add",
    default:[]
})

export const todoListFilterState = atom({
    key: 'todoListFilterState',
    default: 'Show All',
});

export const filteredTodoListState = selector({
    key: "filteredTodoListState",
    get: ({ get })=>{
        const filter = get(todoListFilterState)
        const list = get(textState)

        switch (filter) {
            case "Show Completed":
                return list.filter((item) => item.isComplete);
            case "Show Uncompleted":
                return list.filter((item) => !item.isComplete);
            default:
                return list
        }
    },
    set: () => {
      console.log("huhuhuhu")  
    }
})


export const todoListStatsState = selector({
    key: 'todoListStatsState',
    get: ({get}) => {
      const todoList = get(textState);
      const totalNum = todoList.length;
      const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
      const totalUncompletedNum = totalNum - totalCompletedNum;
      const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum * 100;
  
      return {
        totalNum,
        totalCompletedNum,
        totalUncompletedNum,
        percentCompleted,
      };
    },
  });