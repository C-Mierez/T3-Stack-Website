import { z } from "zod";
import {
    fetchRandomPerson,
    fetchRandomPersonOptions,
} from "../../lib/FakePersonGenerator";
import { createRouter } from "./context";

export const fakePersonRouter = createRouter()
    .query("get-person-by-id", {
        input: z.object({ id: z.number() }),
        async resolve({ input }) {
            return await fetchRandomPerson();
        },
    })
    .query("get-random-people-options", {
        async resolve() {
            return await fetchRandomPersonOptions();
        },
    });
