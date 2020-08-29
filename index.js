function* createIdGenerator() {
  let id = 0;
  while (true) yield console.log(`id:`, ++id);
}
const idGenerator = createIdGenerator();

idGenerator.next().value;
idGenerator.next().value;

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

fontGenerator.next(`up`).value;
fontGenerator.next(`up`).value;
fontGenerator.next(`up`).value;
fontGenerator.next().value;
fontGenerator.next("down").value;
fontGenerator.next(`down`).value;
fontGenerator.next("down").value;
fontGenerator.next().value;
