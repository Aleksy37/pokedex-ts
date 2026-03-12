import { State } from "./state";

export async function commandInspect(state: State, ...args: string[]) { 
    if (args[0] === undefined) {
            throw new Error("Please provide the name or id of the pokemon you would like to inspect");
        }
    const pokemonName = args[0];
    const pokemon = state.caughtPokemon[pokemonName];
    if (!pokemon) {
        throw new Error(`you have not caught that pokemon`);
    }
    
    console.log(`Name: ${pokemon.name}`);
    console.log(`Height: ${pokemon.height}`);
    console.log(`Weight: ${pokemon.weight}`);
    for (const stat of pokemon.stats) {
        console.log(`  -${stat.stat.name}: ${stat.base_stat}`);
    }
    console.log("Types:");
    for (const typeInfo of pokemon.types){
        console.log("  -", typeInfo.type.name);
    }
}