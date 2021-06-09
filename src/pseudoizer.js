const characterMap = {
  a: "á",
  b: "β",
  c: "ç",
  d: "δ",
  e: "è",
  f: "ƒ",
  g: "ϱ",
  h: "λ",
  i: "ï",
  j: "J",
  k: "ƙ",
  l: "ℓ",
  m: "₥",
  n: "ñ",
  o: "ô",
  p: "ƥ",
  q: "9",
  r: "ř",
  s: "ƨ",
  t: "ƭ",
  u: "ú",
  v: "Ʋ",
  w: "ω",
  x: "ж",
  y: "¥",
  z: "ƺ",
  A: "Â",
  B: "ß",
  C: "Ç",
  D: "Ð",
  E: "É",
  F: "F",
  G: "G",
  H: "H",
  I: "Ì",
  J: "J",
  K: "K",
  L: "£",
  M: "M",
  N: "N",
  O: "Ó",
  P: "Þ",
  Q: "Q",
  R: "R",
  S: "§",
  T: "T",
  U: "Û",
  V: "V",
  W: "W",
  X: "X",
  Y: "Ý",
  Z: "Z",
};

function mapStringToPseudoString(rawString) {
  return rawString.split("").map(mapCharToPseudo).join("");
}

function mapCharToPseudo(char) {
  return Object.keys(characterMap).includes(char) ? characterMap[char] : char;
}

module.exports = mapStringToPseudoString;
