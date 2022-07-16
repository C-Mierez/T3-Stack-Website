import type {
    GetServerSideProps,
    InferGetServerSidePropsType,
    NextPage,
} from "next";
import Head from "next/head";
import { VoteOptions } from "../components/Home/VoteOptions";
import css from "../styles/Home.module.css";
import { getVotePeopleIds } from "../utils/randomPerson";
import { trpc } from "../utils/trpc";

export const getServerSideProps: GetServerSideProps = async (context) => {
    return {
        props: {
            peopleIds: getVotePeopleIds(),
        },
    };
};

const Home: NextPage = ({
    peopleIds,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    console.log("Rendered Home");

    const onClickA = () => {
        console.log("A");
    };
    const onClickB = () => {
        console.log("B");
    };

    return (
        <>
            <Head>
                <title>Create T3 App</title>
                <meta name="description" content="Generated by create-t3-app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={css.main}>
                <h3>{"Would thou dare ...?"}</h3>

                <VoteOptions
                    peopleIds={peopleIds}
                    onClickA={onClickA}
                    onClickB={onClickB}
                />
            </div>
        </>
    );
};

export default Home;
