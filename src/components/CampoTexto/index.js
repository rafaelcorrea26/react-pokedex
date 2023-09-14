import './CampoTexto.css';

const CampoTexto = (props) => {

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div>
            <input type="search" className="input_search" placeholder="Digite o Nome ou Numero" required />
        </div>
    )
}

export default CampoTexto;