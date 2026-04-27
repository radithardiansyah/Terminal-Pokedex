# Terminal Pokédex

A simple CLI Pokédex built to learn TypeScript and practice working with APIs.

---

## 🌞 Features

### 1. View Pokémon stats
- Type a Pokémon’s name to see its stats (height, weight, types, abilities)

### 2. Add Pokémon to your favorites list
- Select the **"add"** option after viewing a Pokémon’s stats

### 3. Remove Pokémon from your favorites list
- Coming soon (hopefully)

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/terminal-pokedex.git
cd terminal-pokedex
```

---

### 2. Install dependencies

```bash
bun install
```

---

### 3. Run the app

```bash
bun run index.ts
```

---

## 🕹️ How to Use

Once the app is running:

- Type a Pokémon name (e.g. `pikachu`, `ditto`)
- Type `fav` to see your favorite Pokémon list
- Type `exit` to quit the app

---

## ⚙️ Tech Stack

- TypeScript
- Bun
- PokeAPI (https://pokeapi.co/)
- @clack/prompts

---

## 📌 Notes

- Favorites are stored in memory (they reset when the app restarts)

---

## 🛠️ Future Improvements

- Remove Pokémon from favorites
- Persist favorites (save to file or database)
- Improve CLI UI (colors, layout, navigation)
- Better error handling for invalid Pokémon names

---

## 📦 About

This project was created using:

```bash
bun init
```

Running on **Bun v1.3.4**, a fast all-in-one JavaScript runtime.  
Learn more: https://bun.com
