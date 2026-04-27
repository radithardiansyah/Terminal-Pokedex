import * as p from "@clack/prompts";

interface PokeStats {
  name: string;
  height: number;
  weight: number;
  types: any[];
  abilities: any[];
}

async function fetchR<T>(url: string): Promise<T> {
  const res = await fetch(url);
  return res.json() as T;
}

const pokemonFav: string[] = [];
async function PokeSearch(PokemonName: string) {
  PokemonName = PokemonName.toLowerCase();
  let url: string = `https://pokeapi.co/api/v2/pokemon/${PokemonName}`;
  const data = await fetchR<PokeStats>(url);
  console.log("\n========== POKEDEX ==========");
  console.log(`Name: ${data.name}`);
  console.log(`Height: ${data.height}`);
  console.log(`Weight: ${data.weight}`);
  const types = data.types.map((t: any) => t.type.name);
  console.log(`Types: ${types.join(", ")}`);
  const abilities = data.abilities.map((a: any) => a.ability.name);
  console.log(`Abilities: ${abilities.join(", ")}`);
  console.log("================================\n");

  const action = await p.select({
    message: `add ${PokemonName} to your favorite list?`,
    options: [
      { value: "favorite", label: "add" },
      { value: "no", label: "no" },
    ],
  });

  if (action === "favorite") {
    pokemonFav.push(`${PokemonName}`);
    console.log(`${PokemonName} added to favorites!`);
  }
}

let running: boolean = true;
async function main() {
  while (running === true) {
    const input = await p.text({
      message: "Which Pokemon? ('fav' / 'exit')",
    });

    if (p.isCancel(input)) {
      process.exit(0);
    }

    if (input === "exit" || input === null) {
      break;
    } else if (input === "fav") {
      if (pokemonFav.length === 0) {
        console.log("\n========== FAVORITES ==========");
        console.log("you dont have favorite pokemon yet");
        console.log("================================\n");
      } else {
        pokemonFav.forEach((name, index) => {
          console.log("\n========== FAVORITES ==========");
          console.log(`${index + 1}. ${name}`);
          console.log("================================\n");
        });
      }
      continue;
    }
    await PokeSearch(input);
  }
}

main();
