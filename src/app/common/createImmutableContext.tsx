import React from "react";
import { createMutableContext } from "@/app/common/createMutableContext";

type ImmutableContext<T> = {
  context: T;
}

export const createImmutableContext = <T,>(initialContext: T) => {
  const {Provider, useContext} = createMutableContext(initialContext)

  return {Provider, useContext: () => ({context: useContext().context} satisfies ImmutableContext<T>)};
}
