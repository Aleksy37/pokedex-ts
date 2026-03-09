import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { commandMapForward, commandMapBack,  } from "./command_map.js";
import { commandExplore } from "./command_explore.js";
import type { CLICommand } from "./state.js";

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
        }
    };
}