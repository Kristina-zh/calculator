import Head from "next/head";

import Goal from "@/components/Home/Goal";
import StartingHero from "@/components/Layout/StartingPage";

export default function Home() {
  const isAuth = false;

  return (
    <>
      <Head>
        <title>Finance planner</title>
        <meta name="description" content="Plan your finances to achieve your goals." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {isAuth ? <Goal /> : <StartingHero />}
    </>
  );
}
