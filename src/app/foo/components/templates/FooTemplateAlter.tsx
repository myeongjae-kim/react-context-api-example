'use client';

import React from 'react';
import { FooContextAlter } from "@/app/foo/FooContext";

const FooTemplate = (): React.JSX.Element => {
  const {context: foo} = FooContextAlter.useContext()

  return (
    <div>
      <div>FooTemplateAlter: {foo}</div>
    </div>
  );
};

export default FooTemplate;
