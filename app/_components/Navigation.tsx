import Link from "next/link";
// import { auth } from "../_service/auth";
// import Image from "next/image";

export default async function Navigation() {
  // const session = await auth();

  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        <li>
          <Link
            href="/cabins"
            className="hover:text-accent-400 transition-colors"
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-accent-400 transition-colors"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/account"
            className="hover:text-accent-400 transition-colors"
          >
            Guest area
          </Link>
          {/* {session?.user?.image ? (
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors flex flex-row-reverse items-center gap-4"
            >
              <Image
                width={32}
                height={32}
                className="h-8 w-8 rounded-full"
                src={session.user.image}
                alt={session.user.name}
                referrerPolicy="no-referrer"
              />
              <span>Guest area</span>
            </Link>
          ) : (
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors"
            >
              Guest area
            </Link>
          )} */}
        </li>
      </ul>
    </nav>
  );
}
