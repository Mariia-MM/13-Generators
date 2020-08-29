function* createIdGenerator() {
  let id = 0;
  while (true) yield console.log(`id:`, ++id);
}
const idGenerator = createIdGenerator();

idGenerator.next().value;
idGenerator.next().value;
idGenerator.next().value;
idGenerator.next().value;
idGenerator.next().value;
idGenerator.next().value;
idGenerator.next().value;
