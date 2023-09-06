"use client";

import React from "react";
import { FooContext } from "@/app/foo/FooContext";
import { FooContextImmutable } from "@/app/foo/FooContextImmutable";

const ClientDependencyContainer = ({
  children,
}: React.PropsWithChildren): React.JSX.Element => {
  return (
    <FooContext.Provider>
      <FooContextImmutable.Provider>{children}</FooContextImmutable.Provider>
    </FooContext.Provider>
  );
};

export default ClientDependencyContainer;
