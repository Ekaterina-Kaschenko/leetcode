function kebabToTitle(input) {
  const [number, ...words] = input.split("-");
  const title = words
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  return `${number}. ${title}`;
}

// function kebabToTitle(input) {
//   const [...words] = input.split("-");
//   debugger
//   return words
//     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(" ");
// }

function titleToKebab(input) {
  const [numberPart, ...titleWords] = input.split(". ");
  const kebab = titleWords.join(" ")
    .toLowerCase()
    .split(" ")
    .join("-");
  return `${numberPart}-${kebab}`;
}


console.log(kebabToTitle("123-best-time-to-buy-stock"));
console.log(kebabToTitle("best-time-to-124-buy-stock"));
// "123. Best Time To Buy Stock"

console.log(titleToKebab("123. Best Time To Buy Stock"));
console.log('sdsdssd');

