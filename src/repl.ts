import { State } from './state.js';

export async function startREPL(state: State) {
    const { readline: rl, commands } = state

    rl.prompt();
    rl.on("line", async (input) => {
        const res = cleanInput(input)
        if (res.length === 0) {
            rl.prompt();
            return;
        }
        const commandName = res[0]
        const cmd = commands[commandName]
        if (!cmd) {
            console.log(`Unknown command: "${commandName}". Type "help" for a list of commands`);
            rl.prompt();
            return;
        }
        try{
            await cmd.callback(state);
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
