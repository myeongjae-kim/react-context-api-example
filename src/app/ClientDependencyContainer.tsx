'use client';

import React from 'react';
import { FooContextAlter } from "@/app/foo/FooContext";

const ClientDependencyContainer = ({children}: React.PropsWithChildren): React.JSX.Element => {
  return (
    <FooContextAlter.Provider>{children}</FooContextAlter.Provider>
  );
};

export default ClientDependencyContainer;
