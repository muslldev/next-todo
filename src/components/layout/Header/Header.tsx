import { Inconsolata } from "next/font/google";

const inconsolata = Inconsolata({
  weight: "700",
  display: "swap",
  subsets: ["latin"],
});

export default function Header() {
  return (
    <div className="flex justify-center items-center text-white text-3xl py-8">
      <h1 className={inconsolata.className}>TODO LIST</h1>
    </div>
  );
}
