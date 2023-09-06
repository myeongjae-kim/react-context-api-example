'use client';

import React from 'react';
import { FooContextImmutable } from "@/app/foo/FooContextImmutable";

const FooTemplate = (): React.JSX.Element => {
  const {context: foo} = FooContextImmutable.useIt()

  return (
      <div>FooImmutableTemplate: {foo}</div>
  );
};

export default FooTemplate;
