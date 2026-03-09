import { State } from "./state.js";


export async function commandExplore(state: State, ...args: string[]) {
        if (args[0] === undefined) {
            throw new Error("Please provide the name or id of the location you wish to explore");
        }
        const locationName = args[0];
        const location = await state.pokeAPI.fetchLocation(locationName);

        console.log(`Exploring ${locationName}...`);
        console.log("Found Pokemon:");
        for (const enc of location.pokemon_encounters) {
            console.log(` - ${enc.pokemon.name}`);
        }
    }
