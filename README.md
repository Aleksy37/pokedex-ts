# pokedex-ts

An interactive REPL CLI tool for looking up Pokémon data, written in TypeScript and powered by the [PokéAPI](https://pokeapi.co/).

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![PokéAPI](https://img.shields.io/badge/PokéAPI-EF5350?style=for-the-badge&logo=pokemon&logoColor=white)

## Features

- Interactive REPL loop — type commands directly in your terminal
- Fetches live Pokémon data from the PokéAPI
- No runtime dependencies — uses Node's native `fetch`
- Written in TypeScript with full type coverage
- Test suite powered by Vitest

## Usage

```bash
npm install
npm run dev
```

This compiles the TypeScript and launches the REPL. Type `help` to see available commands.

## Commands

| Command | Description |
|---|---|
| `help` | List available commands |
| `map` | Display the next page of location areas |
| `mapb` | Display the previous page of location areas |
| `explore <area>` | List Pokémon found in a location area |
| `catch <pokemon>` | Attempt to catch a Pokémon |
| `inspect <pokemon>` | View stats for a caught Pokémon |
| `pokedex` | List all Pokémon you've caught |
| `exit` | Exit the REPL |

## Scripts

```bash
npm run dev     # Compile and run
npm run build   # Compile TypeScript only
npm start       # Run compiled output
npm test        # Run tests with Vitest
```
