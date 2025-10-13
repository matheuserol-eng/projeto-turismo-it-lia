import { useState } from "react"
import { Header } from "../../components/Header"
import { TextField } from "../../components/TextField"

export const AboutPage = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const handleSubmit = event => {
        event.preventDefault()
        console.log({ name, email, message })
    }
    return (
        <main>
            <main className="w-full min-h-screen bg-gradient-to-r from-green-500 via-neutral-50 to-red-500">
                <Header />

                <div className="w-full flex flex-col rounded-full items-center min-h-[30rem] px-8 justify-center bg-[url('./comida.png')] bg-no-repeat bg-center">
                    <h1 className="text-5xl font-bold">Culinária e Costumes <br /> Italianos</h1><br />
                    <h2 className="text-2xl font-bold">Bom, espero que você tenha gostado de ter conhecido<br /> um pouco da Itália! Fique a disposição caso queira<br /> entrar em contato conosco e leia um pouco<br /> mais sobre o site logo abaixo.</h2>
                    <a href="#conteudo" className="my-10 p-4 bg-cyan-400 rounded-lg cursor-pointer">Avançar</a>
                </div>

                <div className="w-full py-10 max-w-5xl px-8 lg:px-12 mx-auto flex flex-col items-center justify-center">
                    <section id="conteudo" className="w-full flex flex-col items-center justify-center mb-12">

                        <span className=" bg-green-300 p-3 rounded-2xl border mb-4">
                            <h2 className="text-2xl font-bold text-center">Sobre o Site</h2>
                        </span>

                        <article className="flex flex-col lg:flex-row items-center gap-6">

                            <p className="text-justify max-w-sm">Neste Site mostra mais sobre os diversos tipos de gastronomia, costumes e alguns famosos pontos turísticos de nossa querida Itália. A ideia que eu tive foi de justamente pegar de modelo este país maravilhoso  como princípal assunto do projeto, foi devido a uma viagem que fiz em outubro/novembro de 2022 para a cidade de Ragusa, na ilha da Sícilia, que fica localizada no extremo sul da Itália.  Tenho o costume de brincar que esse país é como se fosse uma bota “chutando” uma bola, e que nessa bola é onde situa-se o lugar para onde fui visitar. </p>
                        </article>
                    </section>

                    <div className="w-full flex mb-12 justify-center items-center">
                        <section className="flex flex-col items-center justify-center">
                            <figure className="w-full max-w-80">
                                <img src="./ragusa.png" alt="Ragusa" />
                            </figure>

                            <article>
                                <h3 className="text-xl font-semibold text-center mb-2">Lindo, não?? Ragusa (IBLA - PARTE HISTÓRICA) vista de noite.</h3>

                            </article>
                        </section>
                    </div>
                    <h2 className="p-4 bg-blue-300 rounded-2xl border">CONTATE-NOS!</h2>
                    <form className="py-10 p-5 bg-cyan-300 rounded-3xl border" onSubmit={handleSubmit}>
                        <TextField
                            id='name'
                            name="fullName"
                            label="Nome completo"
                            placeholder="Digite seu nome!"
                            type="text"
                            value={name}
                            onChange={event => setName(event.target.value)}
                        />
                        <TextField
                            id='email'
                            name="email"
                            label="E-mail completo"
                            placeholder="Digite seu email!"
                            type="email"
                            value={email}
                            onChange={event => setEmail(event.target.value)}
                        />

                        <fieldset className="flex flex-col space-y-2 mb-2" >
                            <label htmlFor="message" className="font-medium">Digite sua mensagem</label>
                            <textarea id="message" name="message" rows={5} className="py-2 resize-none px-4 border rounded-2xl w-full" value={message}
                                onChange={event => setMessage(event.target.value)} />
                        </fieldset>

                        <button type="submit" className="bg-blue-500 text-neutral-50 px-4 py-2 rounded-2xl cursor-pointer text-center w-full">
                            Enviar
                        </button>
                    </form>

                    <a href="#" className="my-10 p-4 bg-stone-900 text-white rounded-lg cursor-pointer mx-auto">Ir ao topo</a>

                </div>
            </main>

        </main>
    )
}