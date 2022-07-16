import { FakePerson } from "../models/FakePerson";

export async function fetchRandomPerson(): Promise<FakePerson> {
    const person = await (
        await fetch("https://fakeface.rest/face/json")
    ).json();

    const gender = person["gender"];

    const name = await fetchRandomName(gender);

    const fakePerson: FakePerson = {
        id: person["filename"],
        name: name,
        gender: gender,
        imageUrl: person["image_url"],
    };

    return fakePerson;
}

export async function fetchRandomPersonOptions(): Promise<FakePerson[]> {
    return [await fetchRandomPerson(), await fetchRandomPerson()];
}

export async function fetchRandomName(gender?: string): Promise<string> {
    gender = gender ?? "female";

    const name = await (
        await fetch(
            `http://names.drycodes.com/1?nameOptions=${
                gender === "female" ? "girl_names" : "boy_names"
            }`
        )
    ).json();

    const formattedName = name[0].replace("_", " ");

    return formattedName;
}
