"use client";

import React from "react";
import { FooContext } from "@/app/foo/FooContext";

const FooTemplate = (): React.JSX.Element => {
  const { context: foo, updateContext: setFoo } = FooContext.useIt();

  return (
    <div className={"flex flex-col justify-center"}>
      <div>FooTemplate: {foo}</div>
      <button
        className={"rounded-xl border bg-white p-2"}
        onClick={() => setFoo((it) => (it === "baz" ? "bar" : "baz"))}
      >
        toggle
      </button>
    </div>
  );
};

export default FooTemplate;
