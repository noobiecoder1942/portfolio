import Hero from "../components/home/Hero";
import NavBar from "@/components/NavBar";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <main className="bg-light dark:bg-dark w-full min-h-screen">
        <NavBar/>
        <Hero />
      </main>
    </>
  );
}
