import Botoes from '../Botoes';
import CampoTexto from '../CampoTexto';
import './Formulario.css';

function Formulario(props) {
    return (
        <form className="form">
            <div>
                <CampoTexto />
                <Botoes searchPokemon={props.searchPokemon} render={props.renderPokemon}/>
            </div>
        </form>
    )
}

export default Formulario;