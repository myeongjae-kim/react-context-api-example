'use client';

import React from 'react';
import { FooContextAlter } from "@/app/foo/FooContext";

const FooTemplate = (): React.JSX.Element => {
  const {state: foo, setState: setFoo} = FooContextAlter.useState()

  return (
    <div className={'flex flex-col justify-center'}>
      <div>FooTemplate: {foo}</div>
      <button className={'p-2 border rounded-xl bg-white'} onClick={() => setFoo('baz')}>make it baz</button>
    </div>
  );
};

export default FooTemplate;
