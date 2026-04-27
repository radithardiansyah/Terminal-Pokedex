interface PokeStats {
  Name: string;
  Height: number;
  Weight: number;
  Types: string;
  Abilities: string;
}

//interface
// map

async function fetchR<T>(url: string): Promise<T> {
  const res = await fetch(url);
  return res.json();
}

async function PokeSearch(PokemonName: string) {
  let url: string = `https://pokeapi.co/api/v2/pokemon/${PokemonName}`;
  const data = await fetchR<U>(url);
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
    if (input === "exit") break;
    await PokeSearch(input);
  }
}

main();
