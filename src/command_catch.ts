import { State } from "./state";

export async function commandCatch(state: State, ...args: string[]) { 
    if (args[0] === undefined) {
            throw new Error("Please provide the name or id of the pokemon you would like to attempt catching");
        }
    const pokemonName = args[0];

    const pokemon = await state.pokeAPI.fetchPokemon(pokemonName);

    if (state.caughtPokemon[pokemon.name]) {
        console.log(`${state.caughtPokemon[pokemon.name].name} is already in your Pokedex!`)
        return;
    }
    console.log(`Throwing a Pokeball at ${pokemon.name}...`);

    const catchRate = Math.min(1, 70/pokemon.base_experience);

    if (Math.random() < catchRate) {
        console.log(`${pokemon.name} was caught!`);
        state.caughtPokemon[pokemon.name] = pokemon;
        console.log("You may now inspect it with the inspect command");
    } else {
        console.log(`${pokemon.name} escaped!`);
    }
    
}