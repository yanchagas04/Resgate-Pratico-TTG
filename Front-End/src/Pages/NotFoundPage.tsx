import { Link } from "react-router-dom";

export default function NotFoundPage() {
    return (
        <main className="flex flex-col justify-center items-center h-screen font-['Inter']">
            <h1 className="text-2xl font-black">Essa página não existe</h1>
            <Link to="/">
                <button className="flex p-3 rounded-md bg-red-700 hover:bg-red-800 duration-150 ease-in text-white">Ir para Home</button>
            </Link>
        </main>
    )
}