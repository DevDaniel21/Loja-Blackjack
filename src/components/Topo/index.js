import estilos from './Topo.module.css';

export default function Topo() {
    return (
        <header>
            <div className={estilos.topo}>
                <picture>
                    <a href="">
                        <img src="./blackjack.png" />
                    </a>
                </picture>

                <nav>
                    <a href="#produto">Produtos</a>
                    <a href="#Sobre_sobre__xnGxw">Sobre</a>
                    <a href="#Contato_contato__bdKJ8">Contato</a>
                </nav>
            </div>
        </header>
    );
}
