import type React from "react";
import css from "../../styles/Home.module.css";
import { FakePerson } from "../../models/FakePerson";
import { trpc } from "../../utils/trpc";

export const VoteOptions: React.FC<{
    peopleIds: number[];
    onClickA: () => void;
    onClickB: () => void;
}> = (props) => {
    const { peopleIds, onClickA, onClickB } = props;

    const options = trpc.useQuery(["fakePerson.get-random-people-options"]);

    console.log("Rendered VoteOptions");

    const isLoading = options.isLoading || options.isFetching;
    const [personA, personB] = options.data ?? [];

    return (
        <>
            <div className={css.options}>
                <div
                    className={
                        css.option + " " + (isLoading ? css.loading : "")
                    }
                    onClick={() => {
                        onClickA();
                        options.refetch();
                    }}
                >
                    {isLoading ? (
                        <div className={css.loader}>Loading...</div>
                    ) : (
                        <>
                            <img src={personA!.imageUrl}></img>
                            <div className={css.name}>{personA!.name}</div>
                        </>
                    )}
                </div>
                <div>vs</div>
                <div
                    className={
                        css.option + " " + (isLoading ? css.loading : "")
                    }
                    onClick={() => {
                        onClickB();
                        options.refetch();
                    }}
                >
                    {isLoading ? (
                        <div className={css.loader}>Loading...</div>
                    ) : (
                        <>
                            <img src={personB!.imageUrl}></img>
                            <div className={css.name}>{personB!.name}</div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};
