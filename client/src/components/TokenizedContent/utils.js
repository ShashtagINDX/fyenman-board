export const isDelimiter = (letter) => {
  return (
    letter === "\n" ||
    letter === "-" ||
    letter === "," ||
    letter === "." ||
    letter === "|" ||
    letter === "?" ||
    letter === ":" ||
    letter === ";" ||
    letter === "/" ||
    letter === "\\"
  );
};

export const isBracketOpen = (letter) => {
  return (
    letter === "(" ||
    letter === "{" ||
    letter === "[" ||
    letter === '"' ||
    letter === "'"
  );
};
export const isBracketClose = (letter) => {
  return (
    letter === ")" ||
    letter === "}" ||
    letter === "]" ||
    letter === '"' ||
    letter === "'"
  );
};
