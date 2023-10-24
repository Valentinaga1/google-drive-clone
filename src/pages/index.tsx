//@ Packages
import Head from "next/head";
//@ Scripts
import HomeComponent from "@/components/Home";

export default function Home() {

  return (
    <>
      <Head>
        <title>Drive Clone</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <HomeComponent />
        </div>
      </main>
    </>
  );
}
