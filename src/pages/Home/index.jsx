import { Header } from "../../components/Header"


export const HomePage = () => {
    return (
        <main className=" w-full min-h-screen bg-gradient-to-r from-green-500 via-neutral-50 to-red-500">
            <Header />

            <div className="w-full flex flex-col rounded-full items-center min-h-[30rem] px-8 justify-center bg-[url('./background.png')] bg-no-repeat bg-center">
                <h1 className="text-5xl font-bold">Itália e suas mil <br /> maravilhas🍕</h1><br />
                <a href="culinaria" className="p-4 bg-cyan-400 rounded-lg cursor-pointer">Vamos explorar!</a>
            </div>
        </main>

    )
}