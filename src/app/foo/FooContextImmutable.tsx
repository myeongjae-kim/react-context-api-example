'use client';

import React from "react";
import { Foo, fooDefault } from "@/app/foo/Foo";
import { createImmutableContext } from "@/app/common/createImmutableContext";

export const FooContextImmutable = createImmutableContext<Foo>(fooDefault());
