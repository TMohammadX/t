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
    <img src="/logo.png" className="w-[150px] h-[150px] rounded"/>
    <h1>We regret to inform you that Toosi Restaurant is permanently closed until further notice.
Important Clarification:
We have no affiliation with the new restaurant located at 4686 Boul des Sources.
The new establishment is neither under new management nor ownership of Toosi.
Any restaurant falsely claiming a management transfer or association with Toosi will face severe legal action.
Thank you for your understanding.</h1>
    </main>
  );
}
