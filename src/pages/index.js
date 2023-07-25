import { Inter } from "next/font/google";
import Homepage from "@/components/HomePage";
import Users from "@/components/Users";
import Calcu from "@/components/Calcu";
import TicTacToe from "@/components/TicTacToe";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      {/* <Homepage/> */}
      {/* <Users /> */}
      {/* <Calcu/> */}
      <TicTacToe/>
    </main>
  );
}
