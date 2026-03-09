import { State } from './state.js';

export async function startREPL(state: State) {
    const { readline: rl, commands } = state

    rl.prompt();
    rl.on("line", async (input) => {
        const words = cleanInput(input)
        if (words.length === 0) {
            rl.prompt();
            return;
        }
        const commandName = words[0]
        const cmd = commands[commandName]
        const args = words.slice(1)

        if (!cmd) {
            console.log(`Unknown command: "${commandName}". Type "help" for a list of commands`);
            rl.prompt();
            return;
        }
        try{
            await cmd.callback(state, ...args);
        } catch (err) {
           console.log((err as Error).message);
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
