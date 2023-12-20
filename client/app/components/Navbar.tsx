import Link from "next/link";
import Search from "./search"
export default function Navbar(){
    return (
        <header className="bg-slate-400 sticky z-10">
            <nav className="flex flex-col gap-4 sm:flex-row sm:justify-between items-center p-4 font-bold max-w-6xl mx-auto text-white">
                <div className="logo">e-commerce</div>
                <div className="Address">1855 Place</div>
                <div className="">Sign-In</div>
                <div className="">Orders</div>
                <div className="">Cart</div>
                <h1 className="text-2xl sm:text-3xl text-center whitespace-nowrap">
                <Link href="/">
                    Next.js Image Gallery
                </Link>
                </h1>
                <Search/>
            </nav>
        </header>
    )
}