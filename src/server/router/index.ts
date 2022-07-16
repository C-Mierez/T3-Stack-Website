// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { authRouter } from "./auth";
import { fakePersonRouter } from "./fakeperson";

export const appRouter = createRouter()
    .transformer(superjson)
    .merge("auth.", authRouter)
    .merge("fakePerson.", fakePersonRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
