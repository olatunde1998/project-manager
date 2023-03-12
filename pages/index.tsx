import Head from "next/head";
import { Inter } from "@next/font/google";
import HomeComponent from "@/components/HomeComponents/HomeComponent";


// const inter = Inter({ subsets: ["latin"] });


export default function Home() {
  return (
    <>
      <Head>
        <title>Project Manager | Home </title>
        <meta name="description" content="Project Manager App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-[#00113d]">
          <HomeComponent />
      </main>
    </>
  );
}
