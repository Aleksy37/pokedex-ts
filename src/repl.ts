export function cleanInput(input: string): string[] {
    const clean = input.trim().toLowerCase()
    if (clean === "") {
        return [];
    }
    return clean.split(/\s+/);
};