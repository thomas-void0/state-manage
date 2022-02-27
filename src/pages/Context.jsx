import React, { useContext, createContext } from "react";

const store = createContext();
const { Provider } = store;

const Child1 = () => {
  console.log("context child1 run");
  const { dispath } = useContext(store);

  const handleUpdate = () => {
    dispath(Math.random());
  };

  return (
    <div>
      <span>child1:</span>
      <button onClick={handleUpdate}>update</button>
    </div>
  );
};

const Child2 = () => {
  console.log("context child2 run");
  const { count } = useContext(store);
  return <div>child2:{count}</div>;
};

const Child3 = () => {
  console.log("context child3 run");
  return <div>child3:</div>;
};

const Parent = () => {
  const [{ count }, dispath] = React.useReducer(
    (_, payload) => ({ count: payload }),
    { count: 0 }
  );

  return (
    <Provider value={{count, dispath}}>
      <h1>context demo</h1>
      <Child1 />
      <Child2 />
      <Child3 />
    </Provider>
  );
};

export default Parent;
