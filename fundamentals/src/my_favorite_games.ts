interface Game {
    id: number;
    name: string;
    genre: string[];
    studio: string;
    plattforms: string[];
}

const rust: Game = {
    id: 1,
    name: "Rust",
    genre: ["survival", "arcade"],
    studio: "Facepunch",
    plattforms: ["PC", "PS", "Xbox"],
};

const scum: Game = {
    id: 2,
    name: "Scum",
    genre: ["survival"],
    studio: "Gamepires",
    plattforms: ["PC"],
};

const minecraft: Game = {
    id: 3,
    name: "Minecraft",
    genre: ["survival"],
    studio: "Mojang",
    plattforms: ["PC", "PS", "Xbox", "mobile"],
};

const myGames = [rust, scum, minecraft];

console.log("\x1b[32m%s\x1b[0m", `I have ${myGames.length} favorite games:`);
myGames.map((game) =>
    console.log(
        "\x1b[32m%s\x1b[0m",
        `${game.name} is a ${game.genre} game and is made by ${game.studio}`
    )
);
