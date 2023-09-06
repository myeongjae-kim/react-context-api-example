'use client';

import React from "react";
import { Foo } from "@/app/foo/Foo";

const _FooContext = React.createContext<{foo: Foo, setFoo(foo:Foo): void}>({
  foo: 'default',
  setFoo(foo: Foo) {}
});

export const FooContext = ({children}: React.PropsWithChildren) => {
  const [foo, setFoo] = React.useState<Foo>('bar')

  return <_FooContext.Provider value={{foo, setFoo}}>{children}</_FooContext.Provider>
}

export const useFooContext = () => {
  return React.useContext(_FooContext)
}
