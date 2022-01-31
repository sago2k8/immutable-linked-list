# immutable-linked-list

immutable simple linked list implementation in node js

## Usage

import:

```ts
import { ImmutableLinkedList } from './';
```

create and empty list:

```ts
const list = new ImmutableLinkedList<number>();
```

create a list with inital values:

```ts
const listWithInitialValues = new ImmutableLinkedList<number>([1, 2, 3]);
```

## Testing

For running the tests execute:

```$
  npm run test
```

Test coverage:

```$
----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------|---------|----------|---------|---------|-------------------
All files |     100 |      100 |     100 |     100 |
 main.ts  |     100 |      100 |     100 |     100 |
----------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       12 passed, 12 total
Snapshots:   0 total
Time:        1.907 s
Ran all test suites.
```

> For motivations and further understanding you might be interted in reading the following challenge description.

### Challenge

Implement the class “ImmutableLinkedList” using TypeScript generics. It should have the methods:

- “add”: adds an element to the end of the list
- “remove”: removes an element from the list
- “map”: takes a callback, iterates over the list and applies the callback to each element, returning a normal array of the results from each call
- “filter”: just like map, but returns a new ImmutableLinkedList containing only the elements matching the predicate(callback)
- “getSize”: returns how many entries there are in the list
- “includes”: given an element, return if it is contained in the list
- “toString”: should return a string representing the elements of the list, similar to how the normal Array.toString works.
  Since the list is immutable, methods that would otherwise modify the lists state, should return a new ImmutableLinkedList instance.
  Make sure that each method is fully typed (parameters and return type).
