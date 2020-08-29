const genButton = document.getElementById("idButton");
const genValue = document.getElementById("idValue");
const bigSize = document.getElementById("bigger");
const smallSize = document.getElementById("smaller");
const sameSize = document.getElementById("size");
const textEx = document.getElementById("text");

function* createIdGenerator() {
  let id = 0;
  while (true) yield ++id;
}
const idGenerator = createIdGenerator();

genButton.addEventListener(`click`, function () {
  genValue.innerHTML = idGenerator.next().value;
});

function* newFontGenerator(size) {
  while (true) {
    let sign = yield size;
    if (sign == `up`) {
      console.log(`font size:`, (size = size + 2));
    } else if (sign == `down`) {
      console.log(`font size:`, (size = size - 2));
    } else {
      console.log(`font size:`, size);
    }
  }
}
const fontGenerator = newFontGenerator(14);

bigSize.addEventListener(`click`, function () {
  textEx.style.fontSize = fontGenerator.next(`up`).value + `px`;
});

smallSize.addEventListener(`click`, function () {
  textEx.style.fontSize = fontGenerator.next(`down`).value + `px`;
});
sameSize.addEventListener(`click`, function () {
  textEx.style.fontSize = fontGenerator.next().value + `px`;
});
