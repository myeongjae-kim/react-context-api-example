'use client';

import React from 'react';
import { useFooContext } from "@/app/foo/FooContext";

const FooTemplate = (): React.JSX.Element => {
  const {foo, setFoo} = useFooContext()

  return (
    <div className={'flex flex-col justify-center'}>
      <div>FooTemplate: {foo}</div>
      <button className={'p-2 border rounded-xl bg-white'} onClick={() => setFoo('baz')}>make it baz</button>
    </div>
  );
};

export default FooTemplate;
