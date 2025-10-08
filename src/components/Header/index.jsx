import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <header className="w-full flex justify-center lg:justify-end px-8 py-4">
                <ul className="flex flex-col lg:flex-row gap-4">
                    <li><Link className="font-medium hover:underline text-lg" to="/">Home</Link></li>
                    <li><Link className="font-medium hover:underline text-lg" to="/culinaria">Culinária</Link></li>
                    <li><Link className="font-medium hover:underline text-lg" to="/turismo">Turismo</Link></li>
                    <li><Link className="font-medium hover:underline text-lg" to="/sobre">Sobre</Link></li>
                </ul>
        </header>
    )
}