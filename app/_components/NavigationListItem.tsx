import Link from 'next/link';
import React from 'react'

export default function NavigationListItem(
  {
    href, children,
  }:{ href: string, children: React.ReactNode }
) {
  return (
    <li>
      <Link href={href} className="hover:text-accent-400 transition-colors">
        { children }
      </Link>
    </li>
  );
}

// WHEN LOGGED
{
  /* {session?.user?.image ? (
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
          )} */
}
