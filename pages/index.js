import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`grid place-items-center gap-10 h-screen w-screen text-center py-56  ${inter.className}`}
    >
    <h1>WEBSITE IS UNDER CONSTRUCTION</h1>
    <img src="/logo.png" className="w-[150px] h-[150px] rounded"/>
    <h1>PLEASE NOTE THAT THERE IS ONLY ONE RESTAURANT TOOSI AND IS LOCATED AT 4686 BOUL DES SOURCES</h1>
    </main>
  );
}
