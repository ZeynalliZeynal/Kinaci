export const toCamelCase = (string) => {
  const words = string.toLowerCase().split(' ');

  let capitilize;

  let finalWord = words[0];

  for (let i = 0; i < words.length; i++) {
    if (i !== 0) {
      capitilize =
        words[i][0].toUpperCase() + words[i].split('').splice(1).join('');
      finalWord += capitilize;
    }
  }

  return finalWord;
};
