import React from "react";
import { createMutableContext } from "@/app/common/createMutableContext";

type ImmutableContext<T> = {
  context: T;
};

export const createImmutableContext = <T,>(initialContext: T) => {
  const { Provider, useIt } = createMutableContext(initialContext);

  return {
    Provider,
    useIt: () => ({ context: useIt().context }) satisfies ImmutableContext<T>,
  };
};
