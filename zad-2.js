function permutator(niz) {
  let res = [];

  if (niz.length === 1) {
    res.push([niz[0]]);
    return res;
  }

  for (let i = 0; i < niz.length; i++) {
    const preostali = niz.filter((broj) => i !== niz.indexOf(broj));
    const perms = permutator(preostali);

    for (let j = 0; j < perms.length; j++) {
      perms[j].push(niz[i]);
      res.push(perms[j]);
    }
  }

  return res;
}

console.log(permutator([1, 2, 3]));
