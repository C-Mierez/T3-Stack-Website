const MAX_PERSON_INDEX = 5;

export const getRandomIndex: (skip?: number) => number = (skip) => {
    const personIndex = Math.floor(Math.random() * MAX_PERSON_INDEX);

    if (skip && skip === personIndex) {
        return getRandomIndex(skip);
    }

    return personIndex;
};

export const getVotePeopleIds: () => [
    personA: number,
    personB: number
] = () => {
    const personA = getRandomIndex();
    const personB = getRandomIndex(personA);

    return [personA, personB];
};
