import { createInterface } from 'node:readline';

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
        console.log(`Your command was: ${res[0]}`);
        rl.prompt();
    })
}

export function cleanInput(input: string): string[] {
    const clean = input.trim().toLowerCase()
    if (clean === "") {
        return [];
    }
    return clean.split(/\s+/);
};
