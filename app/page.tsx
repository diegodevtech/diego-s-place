import Image from "next/image";
import bg from "@/public/bg.png";
import Link from "next/link";

export default function Page() {
  return (
    <div className="h-[calc(100%-100px)] flex flex-col items-center justify-center">
      <Image
        className="object-cover"
        placeholder="blur"
        quality={80}
        src={bg}
        fill
        alt="Mountains and forests with two cabins"
      />

      <div className="text-center relative">
        <h1 className="text-6xl sm:text-8xl mb-10 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-accent-500 via-accent-800 to-accent-500 font-semibold animate-gradient bg-300%">
          Welcome to paradise.
        </h1>
        <Link
          href="/cabins"
          className="w-fit bg-accent-500 px-8 py-6 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
        >
          Explore luxury cabins
        </Link>
      </div>
    </div>
  );
}
