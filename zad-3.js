const prompt = require("prompt-sync")();

function oblikujTekst(tekst, max) {
  const recenice = tekst.split("\n");
  const rezultat = [];
  recenice.forEach((recenica) => {
    let centriranaLinija = recenica;
    if (recenice.length < max) {
      let prazniZnakovi = Math.floor((max - recenica.length) / 2);
      centriranaLinija =
        " ".repeat(prazniZnakovi) + recenica + " ".repeat(prazniZnakovi);
    }
    rezultat.push(centriranaLinija);
  });
  return rezultat.join("\n");
}

const m = parseInt(prompt("Ulaz m: "));
const n = parseInt(prompt("Ulaz n: "));

if (n < m) {
  console.log(
    "Dužina linije (n) mora biti veća ili jednaka maksimalnom broju znakova po liniji (m)."
  );
} else {
  let ulazniTekst = "";
  let linija;
  let max = 0;

  console.log("Unesi tekst (više linija) te završi unos praznim retkom.\n");
  while ((linija = prompt("Unesi liniju teksta:")) !== "") {
    linija = linija.trim();
    if (linija.length > n && linija.replaceAll(" ", "").length > m) {
      console.log(
        "Prelaziš maksimalnu dužinu linije ili maksimalan broj znakova po liniji."
      );
      continue;
    }
    ulazniTekst += linija + "\n";
    max = linija.length > max ? linija.length : max;
  }

  const rezultat = oblikujTekst(ulazniTekst, max);
  console.log("\nCentrirani tekst:\n");
  console.log(rezultat);
}