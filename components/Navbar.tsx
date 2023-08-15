import Link from "next/link";
import Image from "next/image";
export default function PostCard() {
    return(
        <nav>
            <div className="p-2 flex justify-center">
                <Link className="flex items-center" href="/">
                    <Image
                    src="/cyber-lotus.svg"
                    alt="cyber lotus"
                    width={40}
                    height={40}
                    priority
                    />
                    <p className="text-2xl ml-2">Lotus</p>
                </Link>
            </div>
            <div className="p-2">
                <ul className="flex items-center justify-center">
                    <li className="ml-2 mr-2">
                        <Link href="/" className="hover:text-shadow transition-all">About</Link>
                    </li>
                    <li className="ml-2 mr-2">
                        <Link href="/" className="hover:text-shadow transition-all">Works</Link>
                    </li>
                    <li className="ml-2 mr-2">
                        <Link href="/" className="hover:text-shadow transition-all">Blog</Link>
                    </li>
                    <li className="ml-2 mr-2">
                        <Link href="/" className="hover:text-shadow transition-all">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}