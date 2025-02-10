"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLink = [
    {
        name: "Register",
        href: "/Register"
    },
    {
        name: "Login",
        href: "/Login"
    }
];

export default function Home() {
    const pathname = usePathname();

    return (
        <>
            <h1>Hello World</h1>

            <ul>
                {navLink.map((link) => {
                    const isActive = pathname.startsWith(link.href);

                    return (
                        <li key={link.name}>
                            <Link href={link.href} className={isActive ? "font-bold m-4 text-black" : "text-yellow-800 text-xl"}>
                                {link.name}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}
