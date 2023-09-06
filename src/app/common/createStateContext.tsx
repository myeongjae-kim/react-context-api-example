import React from "react";

type StateContext<T> = {
  state: T;
  setState(newState: T): void;
}

export const createStateContext = <T,>(initialState: T) => {
  const InnerContext = React.createContext<StateContext<T>>({state:initialState, setState: () => {}});

  const Provider = ({children}: React.PropsWithChildren) => {
    const [state, setState] = React.useState<T>(initialState);

    return <InnerContext.Provider value={{state, setState}}>{children}</InnerContext.Provider>
  }

  const useState = () => {
    return React.useContext(InnerContext)
  }

  return {Provider, useState};
}
