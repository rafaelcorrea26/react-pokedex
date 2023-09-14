import fetchPokemon from '../../api/fetchPokemon';
import Formulario from '../Formulario';
import ImagemPokedex from '../ImagemPokedex';
import ImagemPokemon from '../ImagemPokemon';

import Pesquisa from '../Pesquisa';
import './Corpo.css';

function Corpo() {
    let searchPokemon = 1;
    const renderPokemon = async (pokemon) => {

       // pokemonName.innerHTML = 'Loading...';
       // pokemonNumber.innerHTML = '';
      
        const data = await fetchPokemon(pokemon);
      
    //     if (data) {
    //       pokemonImage.style.display = 'block';
    //       pokemonName.innerHTML = data.name;
    //       pokemonNumber.innerHTML = data.id;
    //       pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
    //       input.value = '';
    //       searchPokemon = data.id;
    //     } else {
    //       pokemonImage.style.display = 'none';
    //       pokemonName.innerHTML = 'Not found :c';
    //       pokemonNumber.innerHTML = '';
    //     }
       }




    return (
        <div>
            <main>
                <ImagemPokemon />
                <Pesquisa />
                <Formulario searchPokemon={searchPokemon} render={renderPokemon}/>
                <ImagemPokedex />
            </main>
        </div>

    )
}


export default Corpo;
