import { z } from "zod";
import {
    castPersonVote,
    fetchRandomPerson,
    fetchRandomPersonOptions,
} from "../../lib/FakePersonStore";
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
    })
    .mutation("cast-vote", {
        input: z.object({ votedFor: z.string(), votedAgainst: z.string() }),
        async resolve({ input: { votedAgainst, votedFor } }) {
            return { success: await castPersonVote(votedFor, votedAgainst) };
        },
    });
