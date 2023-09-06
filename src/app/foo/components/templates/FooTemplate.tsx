'use client';

import React from 'react';
import { FooContext } from "@/app/foo/FooContext";

const FooTemplate = (): React.JSX.Element => {
  const {context: foo, updateContext: setFoo} = FooContext.useIt()

  return (
    <div className={'flex flex-col justify-center'}>
      <div>FooTemplate: {foo}</div>
      <button className={'p-2 border rounded-xl bg-white'} onClick={() => setFoo(it => it === 'baz' ? 'bar' : 'baz')}>toggle</button>
    </div>
  );
};

export default FooTemplate;
