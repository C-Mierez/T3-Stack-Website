import { z } from "zod";
import { Person } from "../../models/Person";
import { createRouter } from "./context";

export const personRouter = createRouter().query("get-person-by-id", {
    input: z.object({ id: z.number() }),
    async resolve({ input }) {
        const person = await (
            await fetch("https://fakeface.rest/face/json")
        ).json();
        const gender = person["gender"];
        const name = await (
            await fetch(
                `http://names.drycodes.com/1?nameOptions=${
                    gender === "female" ? "girl_names" : "boy_names"
                }`
            )
        ).json();

        return {
            id: person["filename"],
            name: name[0].replace("_", " "),
            gender: gender,
            imageUrl: person["image_url"],
        } as Person;
    },
});
