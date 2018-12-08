import fetch from "node-fetch";

interface Oof {
  name: string;
  gnelf: boolean;
  gnoblin: boolean;
  gnome: boolean;
}

const theBoi: Oof = {
  name: "Red",
  gnelf: false,
  gnoblin: false,
  gnome: true
};

console.log("Hello: ", theBoi);
console.log("Args:", process.argv.slice(2));

console.log("Fetching...");
fetch("https://meme-slash.now.sh")
  .then(res => res.json())
  .then(response => {
    console.log("Response: ", response);
  });
