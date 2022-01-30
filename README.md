# Challenge

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