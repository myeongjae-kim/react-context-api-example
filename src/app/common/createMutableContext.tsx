import React, { Dispatch, SetStateAction } from "react";

type MutableContext<T> = {
  context: T;
  updateContext: Dispatch<SetStateAction<T>>;
};

export const createMutableContext = <T,>(initialContext: T) => {
  const InnerContext = React.createContext<MutableContext<T>>({
    context: initialContext,
    updateContext: () => {},
  });

  const Provider = ({ children }: React.PropsWithChildren) => {
    const [context, updateContext] = React.useState<T>(initialContext);

    return (
      <InnerContext.Provider value={{ context, updateContext }}>
        {children}
      </InnerContext.Provider>
    );
  };

  const useIt = () => {
    return React.useContext(InnerContext);
  };

  return { Provider, useIt };
};
