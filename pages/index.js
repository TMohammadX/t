import { Inter } from "next/font/google";
import Head from 'next/head'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`grid place-items-center gap-10 h-screen w-screen text-center py-56  ${inter.className}`}
    >
         <Head>
        <title>RESTAURANT TOOSI</title>
      </Head>
    <h1>WEBSITE IS UNDER CONSTRUCTION</h1>
    <img src="/logo.png" className="w-[150px] h-[150px] rounded"/>
    <h1>RESTAURANT TOOSI WILL BE MOVING FROM 4686 BOUL DES SOURCES UNTIL FURTHER NOTICE</h1>
    </main>
  );
}
