import local from "../../assets/icons8-local.png";

export const AboutMe = () => {
    return (
        <section>
            <div>
                <div>
                    <h2>Sobre Mim</h2>
                    <p></p>
                </div>
                <div>
                    <div>
                    <img src={local} alt="Ícone de Localidade" />
                    <h2>UNESA - Estácio, Rio de Janeiro</h2>
                    </div>
                    <p><strong>Formado -</strong> Análise e Desenvolvimento de Sistemas 2021-2023</p>
                    <div>
                    <img src={local} alt="Ícone de Localidade" />
                    <h2>Curso de Programação - Kenzie Academy, Rio de Janeiro</h2>
                    </div>
                    <p><strong>Formado -</strong> Desenvolvedor Front End</p>
                </div>
            </div>
        </section>
    )
}