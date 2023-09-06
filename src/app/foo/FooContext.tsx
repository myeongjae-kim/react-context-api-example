'use client';

import React from "react";
import { Foo, fooDefault } from "@/app/foo/Foo";
import { createMutableContext } from "@/app/common/createMutableContext";

export const FooContextAlter = createMutableContext<Foo>(fooDefault());
