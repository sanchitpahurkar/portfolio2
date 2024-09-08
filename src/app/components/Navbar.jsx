import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="flex justify-between p-5 bg-white">
            {/* logo div */}
            <div className="text-xl font-semibold text-black">
                <Link href="/">Sanchit Pahurkar</Link>
            </div>
            {/* nav links */}
            <div className="flex gap-10 text-black">
                <Link href="/projects">Projects</Link>
                <Link href="/about">About</Link>
                <Link href="/certifications">Certifications</Link>
            </div>
            {/* theme toggle */}
            <div className="">
                <button className="h-8 bg-black text-white py-1 px-3 rounded">Theme Change</button>
            </div>
        </nav>
    )
}