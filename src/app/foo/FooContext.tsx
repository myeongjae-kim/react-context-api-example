'use client';

import React from "react";
import { Foo, fooDefault } from "@/app/foo/Foo";
import { createStateContext } from "@/app/common/createStateContext";

export const FooContextAlter = createStateContext<Foo>(fooDefault());
