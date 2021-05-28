import React, { useReducer, createContext } from "react";

const initialState = {
  component: "homepage",
};

const ComponentContext = createContext({
  component: "",
});

function componentReducer(state, action) {
  switch (action.type) {
    case "CHANGECOMPONENT":
      return {
        ...state,
        component: action.payload,
      };

    default:
      return state;
  }
}

function ComponentProvider(props) {
  const [state, dispatch] = useReducer(componentReducer, initialState);

  function changeComponent(component) {
    dispatch({
      type: "CHANGECOMPONENT",
      payload: component,
    });
  }

  return (
    <ComponentContext.Provider
      value={{
        component: state.component,
        changeComponent,
      }}
      {...props}
    />
  );
}

export { ComponentContext, ComponentProvider };
