function isPangram(string) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const lowercaseString = string.toLowerCase();

  for (const letter of alphabet) {
    if (!lowercaseString.includes(letter)) {
      return false;
    }
  }

  return true;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog"));
console.log(isPangram("Hello World!"));
