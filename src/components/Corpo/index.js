import Formulario from '../Formulario';
import ImagemPokedex from '../ImagemPokedex';
import ImagemPokemon from '../ImagemPokemon';
import Pesquisa from '../Pesquisa';
import './Corpo.css';

function Corpo() {

    return (
        <div>
            <main>
                <ImagemPokemon />
                <Pesquisa />
                <Formulario />
                <ImagemPokedex />
            </main>
        </div>

    )
}


export default Corpo;
