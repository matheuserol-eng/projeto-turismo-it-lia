import { Header } from "../../components/Header"

export const CulinaryPage = () => {
    return (
        <main>
            <main className="w-full min-h-screen bg-gradient-to-r from-green-500 via-neutral-50 to-red-500">
                <Header />

                <div className="w-full flex flex-col rounded-full items-center min-h-[30rem] px-8 justify-center bg-[url('./comida.png')] bg-no-repeat bg-center">
                    <h1 className="text-5xl font-bold">Culinária e Costumes <br /> Italianos</h1><br />
                    <h2 className="text-2xl font-bold">Olá! Sejam todos bem vindos ao Site onde<br /> iremos mostrar um pouco sobre a cultura<br /> italiana!!</h2>
                    <a href="#conteudo" className="p-4 bg-cyan-400 rounded-lg cursor-pointer">Avançar</a>
                </div>

                <div className="w-full py-10 max-w-5xl px-8 lg:px-12 mx-auto flex flex-col items-center justify-center">
                    <section id="conteudo" className="w-full flex flex-col items-center justify-center mb-12">

                        <h2 className="text-2xl font-bold text-center mb-4">A Culinária</h2>

                        <article className="flex flex-col lg:flex-row items-center gap-6">
                            <figure className="w-full max-w-40">

                                <img src="./macarrao.png" alt="Macarrão" />
                            </figure>

                            <p className="text-justify max-w-sm">A culinária italiana é uma das mais amadas e influentes do mundo, celebrada por sua simplicidade, seus ingredientes frescos e sua profunda diversidade regional. Ela é muito mais do que apenas pizza e macarrão; é uma celebração da comida caseira, da qualidade e das tradições familiares, frequentemente chamada de "cozinha da mamma".</p>
                        </article>
                    </section>

                    <div className="w-full grid grid-cols-1 lg:grid-cols-2 mb-12">
                        <section className="flex flex-col items-center justify-center">
                            <figure className="w-full max-w-40">
                                <img src="./pizza1.png" alt="Pizza" />
                            </figure>

                            <article>
                                <h3 className="text-xl font-semibold text-center mb-2">A famosa Pizza</h3>

                                <p className="text-justify max-w-sm">A ideia de cobrir massas de pão com ingredientes não é exclusiva dos italianos, e versões ancestrais da pizza já existiam em civilizações antigas.  Como por exemplo egípsios, gregos e romanos já adaptaram-se a essa ideia.</p>
                            </article>
                        </section>

                        <section className="flex flex-col items-center justify-center">
                            <figure className="w-full max-w-30">
                                <img src="./sorvete.png" alt="Sorvete" />
                            </figure>

                            <article>
                                <h3 className="text-xl font-semibold text-center mb-2">Sorvete Gelato</h3>

                                <p className="text-justify max-w-sm">A história do gelato remonta a tempos antigos, mas o produto que conhecemos hoje é uma invenção italiana do período do Renascimento. A tradição começou com misturas de gelo e frutas, evoluindo para a sobremesa cremosa e saborosa que se espalhou pelo mundo.</p>
                            </article>
                        </section>

                        <section className="flex flex-col items-center justify-center">
                            <figure className="w-full max-w-40">
                                <img src="./cornetto.png" alt="Cornetto" />
                            </figure>

                            <article>
                                <h3 className="text-xl font-semibold text-center mb-2">O Cornetto</h3>

                                <p className="text-justify max-w-sm">O cornetto é a versão italiana do croissant francês e é um elemento essencial do café da manhã na Itália. Embora parecidos na forma, existem diferenças marcantes entre os dois. A massa é mais macia e adocicada do que o Croassaint.</p>
                            </article>
                        </section>
                        <section className="flex flex-col items-center justify-center">
                            <figure className="w-full max-w-40">
                                <img src="./fettuccine.png" alt="Fettuccine" />
                            </figure>

                            <article>
                                <h3 className="text-xl font-semibold text-center mb-2">O Macarrão Fettuccine</h3>

                                <p className="text-justify max-w-sm">A história do fettuccine está ligada à culinária italiana tradicional, mas a lenda mais famosa é a da criação do molho Alfredo, que popularizou a massa no mundo. É uma massa longa, larga e achatada, tradicionalmente feita com ovos e farinha.</p>
                            </article>
                        </section>
                    </div>

                    <a href="#" className="p-4 bg-stone-900 text-white rounded-lg cursor-pointer mx-auto">Ir ao topo</a>
                    
                </div>
            </main>
            
        </main>
    )
}