import { atom,selector } from "recoil"

export const counterState = atom({
    key: "add",
    default:0
})

export const selectorState = selector({
    key: "addSelector",
    get: ({ get }) => {
        const val = get(counterState);
        return `${val}呼呼呼呼`
    }
})