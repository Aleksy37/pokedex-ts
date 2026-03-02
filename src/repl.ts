import { createInterface } from 'node:readline';
import { getCommands } from './commands.js';






export function startREPL() {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex >"
    });
    rl.prompt();
    rl.on("line", (input) => {
        const res = cleanInput(input)
        if (res.length === 0) {
            rl.prompt();
            return;
        }
        const commandName = res[0]
        const commands = getCommands();
        const cmd = commands[commandName]
        if (!cmd) {
            console.log(`Unknown command: "${commandName}". Type "help" for a list of commands`);
            rl.prompt();
            return;
        }
        try{
            cmd.callback(commands);
        } catch (err) {
            console.log(err)
        }
        rl.prompt();
    });
}

export function cleanInput(input: string): string[] {
    const clean = input.trim().toLowerCase()
    if (clean === "") {
        return [];
    }
    return clean.split(/\s+/);
};
