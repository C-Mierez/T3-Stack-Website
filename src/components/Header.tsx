import css from "../styles/Layout.module.css";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Header() {
    const { data: session } = useSession();

    return (
        <div className={css.header}>
            <div className={css.title}>{"'Lest, thou dare? 😳"}</div>
            <div className={css.auth}>
                {session ? (
                    <>
                        <div>Welcome, User!</div>
                        <button onClick={() => signOut()}>Log Out</button>
                    </>
                ) : (
                    <button onClick={() => signIn()}>Log in</button>
                )}
            </div>
        </div>
    );
}
