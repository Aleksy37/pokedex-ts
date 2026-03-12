import { State } from "./state";

export async function commandPokedex(state: State) { 
    const pokemons = state.caughtPokemon;
    if (Object.keys(pokemons).length === 0) {
        throw new Error(`you have not caught any pokemon yet`);
    }
    console.log("Your Pokedex:")
    for (let pokemon of Object.values(pokemons)) {
        console.log(` - ${pokemon.name}`);
    }
}