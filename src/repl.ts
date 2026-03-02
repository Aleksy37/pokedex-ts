import { State } from './state.js';

export function startREPL(state: State) {
    const { readline: rl, commands } = state

    rl.prompt();
    rl.on("line", (input: string) => {
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
            cmd.callback(state);
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
