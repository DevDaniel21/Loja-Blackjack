import estilos from './Capa.module.css'

export default function Capa() {
    return (
        <section className={estilos.secao_capa}>
            <div className={estilos.texto}>
                <h2>Sua blusa favorita</h2>
                <h1>AINDA MELHOR</h1>
            </div>
        </section>
    )
}