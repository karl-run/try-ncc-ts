interface Oof {
    name: string,
    gnelf: boolean,
    gnoblin: boolean,
    gnome: boolean,
}

const theBoi: Oof = {
    name: "Red",
    gnelf: false,
    gnoblin: false,
    gnome: true
}

console.log("Hello: ", theBoi)
console.log("Args:", process.argv.slice(2))
