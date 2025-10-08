import { Header } from "../../components/Header"

export const TourismPage = () => {
    return (
             <main className=" w-full min-h-screen bg-gradient-to-r from-green-500 via-neutral-50 to-red-500">
            <Header />
            <div className="w-full flex items-center min-h-[30rem] px-8 justify-center bg-[url('./image7.png')] bg-no-repeat bg-center">
            <h1 className="text-5xl font-bold">Culinária e Costumes  <br /> italianos</h1><br />
           <h1 className="text-lg">Olá Sejam todos bem vindos ao Site onde iremos mostrar um pouco sobre a cultura italiana!!</h1><br />
        </div>
        </main>
    )
}