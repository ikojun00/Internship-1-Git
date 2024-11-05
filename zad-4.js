function diamond(num) {
  if (num < 3 || num % 2 === 0) return null;
  let string = "";
  let middle = parseInt(num / 2) + 1;

  for (let i = 0; i < middle; i++) {
    let element =
      " ".repeat(middle - i - 1) +
      "*".repeat(2 * i + 1) +
      " ".repeat(middle - i - 1);
    string += element;
    string += "\n";
  }

  for (let i = middle; i < num; i++) {
    let element =
      " ".repeat(i - middle + 1) +
      "*".repeat(2 * (num - i - 1) + 1) +
      " ".repeat(i - middle + 1);
    string += element;
    if (i !== num - 1) string += "\n";
  }
  return string;
}

console.log(diamond(7));
