function* createIdGenerator() {
  let id = 0;
  while (true) yield ++id;
}
const idGenerator = createIdGenerator();

console.log(idGenerator.next().value);
console.log(idGenerator.next().value);

console.log(idGenerator.next().value);

console.log(idGenerator.next().value);

console.log(idGenerator.next().value);

console.log(idGenerator.next().value);

// idGenerator.next().value;
// idGenerator.next().value;
