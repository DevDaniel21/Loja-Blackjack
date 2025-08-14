import estilos from './Topo.module.css'

export default function Topo() {
    return (
        <header>
            <div className={estilos.topo}>
                <picture>
                    <a href=""><img src="./blackjack.png"/></a>
                </picture>

                <nav>
                    <a href="#produto">Produtos</a>
                    <a href="#produto">Sobre</a>
                    <a href="#produto">Produtos</a>
                </nav>
            </div>
        </header>
    );
}