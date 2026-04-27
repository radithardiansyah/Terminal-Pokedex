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

async function PokeSearch(PokemonName: string) {
  let url: string = `https://pokeapi.co/api/v2/pokemon/${PokemonName}`;
  const data = await fetchR<PokeStats>(url);
  console.log(`Name: ${data.name}`);
  console.log(`Height: ${data.height}`);
  console.log(`Weight: ${data.weight}`);
  const types = data.types.map((t: any) => t.type.name);
  console.log(`Types: ${types.join(", ")}`);
  const abilities = data.abilities.map((a: any) => a.ability.name);
  console.log(`Abilities: ${abilities.join(", ")}`);
}
let running: boolean = true;
async function main() {
  while (running === true) {
    console.log("Wich Pokemon? || Type 'exit' To Stop");
    const input = prompt("-");
    if (input === "exit" || input === null) break;
    await PokeSearch(input);
  }
}

main();
