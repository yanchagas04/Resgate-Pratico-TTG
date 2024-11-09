import { Link } from "react-router-dom";
import img from "../assets/caratriste.png"

export default function NotFoundPage() {
    return (
        <main className="flex flex-col justify-center items-center h-screen font-['Inter']">
            <h1 className="text-2xl font-black">Essa página não existe</h1>
            <img src={img} alt="Cara triste" className="aspect-square w-1/5"/>
            <Link to="/">
                <button className="flex p-3 rounded-md bg-red-700 hover:bg-red-800 duration-150 ease-in text-white">Ir para Home</button>
            </Link>
        </main>
    )
}