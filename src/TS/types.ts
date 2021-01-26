function padLeft(value: string, padding: string | number) {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }
  if (typeof padding === "string") {
    return padding + value;
  }
  throw new Error(`Ожидал строку или число, а получил '${padding}'.`);
}

console.log(padLeft("Hello world", 4));
//console.log(padLeft("Hello world", true));
