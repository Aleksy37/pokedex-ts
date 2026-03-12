import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { commandMapForward, commandMapBack,  } from "./command_map.js";
import { commandExplore } from "./command_explore.js";
import { commandCatch } from "./command_catch.js";
import type { CLICommand } from "./state.js";
import { commandInspect } from "./command_inspect.js";
import { commandPokedex } from "./command_pokedex.js";

export  function getCommands(): Record<string, CLICommand> {
    return {
        help : {
            name: "help",
            description: "Displays a help message",
            callback: commandHelp,
        },
        exit: {
            name: "exit",
            description: "Exit the pokedex",
            callback: commandExit,
        },
        map: {
            name: "map",
            description: "Displays a list of locations in Pokemon 20 at a time",
            callback: commandMapForward,
        },
        mapb :{
            name: "mapb",
            description: "Goes back to the previous list of 20 locations",
            callback: commandMapBack,
        },
        explore :{
            name: "explore <location_name>",
            description: "Explores an area and returns a list of Pokemon",
            callback: commandExplore,
        },
        catch :{
            name: "catch <pokemon_name>",
            description: "Attempt to catch a pokemon",
            callback: commandCatch,
        },
        inspect :{
            name: "inspect <pokemon_name",
            description: "Inspect a previously caught Pokemon",
            callback: commandInspect,
        },
        pokedex :{
            name: "pokedex",
            description: "Show a list of Pokemon you have caught so far",
            callback: commandPokedex,
        },
    };
}