"use client";

import React from "react";
import { FooContext } from "@/app/foo/FooContext";

const FooTemplate = (): React.JSX.Element => {
  const { context: foo } = FooContext.useIt();

  return (
    <div>
      <div>FooTemplateAlter: {foo}</div>
    </div>
  );
};

export default FooTemplate;
