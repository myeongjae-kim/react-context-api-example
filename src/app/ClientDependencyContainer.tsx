'use client';

import React from 'react';
import { FooContext } from "@/app/foo/FooContext";

const ClientDependencyContainer = ({children}: React.PropsWithChildren): React.JSX.Element => {
  return (
    <FooContext>{children}</FooContext>
  );
};

export default ClientDependencyContainer;
