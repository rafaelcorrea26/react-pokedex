import './Formulario.css';

function Formulario() {
    return (
        <form className="form">
            <input type="search" className="input_search" placeholder="Digite o Nome ou Numero" required />
        </form>
    )
}

export default Formulario;
