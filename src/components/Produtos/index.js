import estilos from './Produto.module.css'

export default function Produtos() {
    return (
        <section id='produto' className={estilos.produtos}>
            <div className={estilos.titulos}>
                <h2>Nossos Produtos</h2>
                <p>
                    Aqui, reunimos as jaquetas mais sofisticadas do mercado, trazendo para você marcas renomadas e materiais marcantes que trazem luxo, elegância e personalidade.
                </p>
                <p>
                    Autenticidade garantida | As melhores marcas do mundo | Envio rápido e seguro
                </p>

                <div className={estilos.perfume_img}>
                    <div className={estilos.card_perfume}>
                        <span className={estilos.selo}>Mais Vendido</span>
                        <h3>Jaqueta com capuz</h3>
                        <picture>
                            <img src='./produto_1.png' alt=''></img>
                        </picture>
                        <p className={estilos.preco}>R$ 210,99</p>
                        <button className={estilos.botao}>Comprar Agora</button>
                    </div>
                    
                    <div className={estilos.card_perfume}>
                        <span className={estilos.seloNovo}>Novo</span>
                        <h3>Jaqueta com vários bolsos</h3>
                        <picture>
                            <img src='./produto_2.png' alt=''></img>
                        </picture>
                        <p className={estilos.preco}>R$ 170,50</p>
                        <button className={estilos.botao}>Comprar Agora</button>
                    </div>

                    <div className={estilos.card_perfume}>
                        <h3>Jaqueta corta vento</h3>
                        <picture>
                            <img src='./produto_3.png' alt=''></img>
                        </picture>
                        <p className={estilos.preco}>R$ 200,00</p>
                        <button className={estilos.botao}>Comprar Agora</button>
                    </div>

                    <div className={estilos.card_perfume}>
                        <h3>Jaqueta de botões</h3>
                        <picture>
                            <img src='./produto_4.png' alt=''></img>
                        </picture>
                        <p className={estilos.preco}>R$ 134,70</p>
                        <button className={estilos.botao}>Comprar Agora</button>
                    </div>
                </div>
            </div>
        </section>
    )
}