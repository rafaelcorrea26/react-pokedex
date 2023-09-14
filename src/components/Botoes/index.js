import './Botoes.css';

function Botoes(props) {

      const Next = async (props) => {
        props.searchPokemon += 1;
        props.renderPokemon(props.searchPokemon);

    }

    const Prev = async (props) => {
        if (props.searchPokemon > 1) {
            props.searchPokemon -= 1;
            props.renderPokemon(props.searchPokemon);
          }
        }
    


    return (
        <div className="buttons">
                <button render={props.renderPokemon} onClick={Next(props.searchPokemon) } className="button btn-prev">Voltar &lt;</button>
                <button render={props.renderPokemon} onClick={Prev(props.searchPokemon) } className="button btn-next">Proximo &gt;</button>
        </div>
        )
} 

    export default Botoes;
