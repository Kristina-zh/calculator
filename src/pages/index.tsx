import Head from "next/head";
import Goal from "@/components/Home/Goal";

export default function Home() {
  return (
    <>
      <Head>
        <title>Finance planner</title>
        <meta name="description" content="Plan your finances to achieve your goals." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Goal />
    </>
  );
}
