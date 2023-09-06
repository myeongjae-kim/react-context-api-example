'use client';

import React from 'react';
import { useFooContext } from "@/app/foo/FooContext";

const FooTemplate = (): React.JSX.Element => {
  const {foo} = useFooContext()

  return (
    <div>
      <div>FooTemplateAlter: {foo}</div>
    </div>
  );
};

export default FooTemplate;
