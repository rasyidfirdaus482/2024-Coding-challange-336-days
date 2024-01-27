function pigIt(str) {
  const words = str.split(" ");

  const pigLatinWords = words.map((word) => {
    const isAlpha = /^[A-Za-z]+$/.test(word);

    if (isAlpha) {
      return word.slice(1) + word[0] + "ay";
    } else {
      return word;
    }
  });

  return pigLatinWords.join(" ");
}

console.log(pigIt("Pig latin is cool"));
console.log(pigIt("Hello world !"));
