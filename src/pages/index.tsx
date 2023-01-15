import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";

export default function Home() {
  const { data: session } = useSession();
  return (
    <>
      <Head>
        <title>Kakatiya University</title>
      </Head>
      <main className={`text-xl`}>
        {session ? (
          <>
            <span>Signed in as {session.user?.email}</span>
            <br />
            <span>{JSON.stringify(session)}</span>
            <br />

            <button
              onClick={() => {
                signOut().catch(console.error);
              }}>
              Sign Out
            </button>
          </>
        ) : (
          <>
            <span>Not signed in!</span>
            <button
              onClick={() => {
                signIn().catch(console.error);
              }}>
              Sign In
            </button>
          </>
        )}
      </main>
    </>
  );
}
