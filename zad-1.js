let ploca = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
let trenutniIgrac = "X";
const prompt = require("prompt-sync")();

function ispisiPlocu() {
  console.log(`
     ${ploca[0]} | ${ploca[1]} | ${ploca[2]}
    ---+---+---
     ${ploca[3]} | ${ploca[4]} | ${ploca[5]}
    ---+---+---
     ${ploca[6]} | ${ploca[7]} | ${ploca[8]}
    `);
}

function provjeriPobjednika() {
  const pobjednickeKombinacije = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let kombinacija of pobjednickeKombinacije) {
    const [a, b, c] = kombinacija;
    if (ploca[a] === ploca[b] && ploca[a] === ploca[c]) {
      return ploca[a];
    }
  }

  return ploca.includes("1") ||
    ploca.includes("2") ||
    ploca.includes("3") ||
    ploca.includes("4") ||
    ploca.includes("5") ||
    ploca.includes("6") ||
    ploca.includes("7") ||
    ploca.includes("8") ||
    ploca.includes("9")
    ? null
    : "Neriješeno";
}

function odigrajPotez(pozicija) {
  if (
    pozicija < 1 ||
    pozicija > 9 ||
    ploca[pozicija - 1] === "X" ||
    ploca[pozicija - 1] === "O"
  ) {
    console.log("Nevažeći potez, pokušajte ponovo.");
    return false;
  }

  ploca[pozicija - 1] = trenutniIgrac;
  ispisiPlocu();

  const rezultat = provjeriPobjednika();
  if (rezultat) {
    if (rezultat === "Neriješeno") {
      console.log("Igra je neriješena!");
    } else {
      console.log(`Pobjednik je: ${rezultat}`);
    }
    return true;
  }

  trenutniIgrac = trenutniIgrac === "X" ? "O" : "X";
  return false;
}

function igra() {
  ispisiPlocu();
  let zavrseno = false;

  while (!zavrseno) {
    const pozicija = prompt(
      `Igrač ${trenutniIgrac}, unesite broj polja (1-9): `
    );
    zavrseno = odigrajPotez(parseInt(pozicija));
  }
}

igra();
