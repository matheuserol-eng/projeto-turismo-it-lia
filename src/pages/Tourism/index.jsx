import { Header } from "../../components/Header"

export const TourismPage = () => {
    return (
        <main>
            <main className="w-full min-h-screen bg-gradient-to-r from-green-500 via-neutral-50 to-red-500">
                <Header />

                <div className="w-full flex flex-col rounded-full items-center min-h-[30rem] px-8 justify-center bg-[url('./comida.png')] bg-no-repeat bg-center">
                    <h1 className="text-5xl font-bold">Culinária e Costumes <br /> Italianos</h1><br />
                    <h2 className="text-2xl font-bold">Olá! Sejam todos bem vindos ao Site onde<br /> iremos mostrar um pouco sobre a cultura<br /> italiana!!</h2>
                    <a href="#conteudo" className="my-10 p-4 bg-cyan-400 rounded-lg cursor-pointer">Avançar</a>
                </div>

                <div className="w-full py-10 max-w-5xl px-8 lg:px-12 mx-auto flex flex-col items-center justify-center">
                    <section id="conteudo" className="w-full flex flex-col items-center justify-center mb-12">

                        <h2 className="text-2xl font-bold text-center mb-4">O Turismo</h2>

                        <article className="flex flex-col lg:flex-row items-center gap-6">
                            <figure className="w-full max-w-40">

                                <img src="./colisseu.png" alt="Colisseu" />
                            </figure>

                            <p className="text-justify max-w-sm">A Itália é um dos destinos turísticos mais populares e fascinantes do mundo, conhecida por sua imensa riqueza cultural, histórica, artística, gastronômica e pelas paisagens deslumbrantes. É um país que atrai milhões de visitantes anualmente, sendo o terceiro mais visitado da Europa. Logo abaixo é possível observar alguns pontos turísticos da Itália: </p>
                        </article>
                    </section>

                    <div className="w-full grid grid-cols-1 lg:grid-cols-2 mb-12">
                        <section className="flex flex-col items-center justify-center">
                            <figure className="w-full max-w-40">
                                <img src="./colisseu1.png" alt="Colisseu1" />
                            </figure>

                            <article>
                                <h3 className="text-xl font-semibold text-center mb-2">O Coliseu de Roma</h3>

                                <p className="text-justify max-w-sm">O Coliseu foi a maior arena de entretenimento público da Roma Antiga, destinado a manter a população entretida.</p>
                            </article>
                        </section>

                        <section className="flex flex-col items-center justify-center">
                            <figure className="w-full max-w-30">
                                <img src="./torrepisa.png" alt="Torrepisa" />
                            </figure>

                            <article>
                                <h3 className="text-xl font-semibold text-center mb-2">A Torre de Pisa</h3>

                                <p className="text-justify max-w-sm">A Torre de Pisa é, na verdade, o campanário (torre de sinos) da Catedral de Pisa. Ela faz parte de um complexo arquitetônico maior na Piazza dei Miracoli (Praça dos Milagres).</p>
                            </article>
                        </section>

                        <section className="flex flex-col items-center justify-center">
                            <figure className="w-full max-w-40">
                                <img src="./vulcao.png" alt="Vulcao" />
                            </figure>

                            <article>
                                <h3 className="text-xl font-semibold text-center mb-2">O monte Etna</h3>

                                <p className="text-justify max-w-sm"> É o vulcão mais alto e ativo da Europa ocidental. Sua existência está ligada à colisão das placas tectônicas Africana e Euroasiática.</p>
                            </article>
                        </section>
                        <section className="flex flex-col items-center justify-center">
                            <figure className="w-full max-w-40">
                                <img src="./veneza.png" alt="Veneza" />
                            </figure>

                            <article>
                                <h3 className="text-xl font-semibold text-center mb-2">A cidade de Veneza</h3>

                                <p className="text-justify max-w-sm">Veneza não é apenas uma cidade à beira-mar; ela é um arquipélago construído sobre uma rede de mais de 100 ilhas em uma lagoa no Mar Adriático.</p>
                            </article>
                        </section>
                    </div>

                    <a href="#" className="p-4 bg-stone-900 text-white rounded-lg cursor-pointer mx-auto">Ir ao topo</a>
                    
                </div>
            </main>
            
        </main>
    )
}