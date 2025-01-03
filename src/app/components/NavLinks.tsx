'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
    { name: 'Home', href: '/' },
    { name: 'Directors', href: '/directors' },
    { name: 'Favorites', href: '/favorites' },
];

export default function NavLinks() {

    const pathname = usePathname()

    return (
        <section className='mt-10'>
            {links.map((link) => {
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={`flex h-[48px] grow items-center m-1 justify-start rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 text-red
                            ${pathname === link.href ? 'bg-sky-100 text-blue-600' : ''}`}
                    >
                        <p className="">{link.name}</p>
                    </Link>
                );
            })}
        </section>
    );
}
