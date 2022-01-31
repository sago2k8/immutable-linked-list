/** Class representing an Element of an ImmutableLinkedList **/
class Element<T> {
  /**
   * @param  {T} value primitive value of the Element
   * @param  {Element<T>|null=null} next either null or a reference to the next node/Element
   */
  constructor(public value: T, public next: Element<T> | null = null) {}
}

/** Class representing an immutable list */
export class ImmutableLinkedList<T> {
  private head: Element<T> | null = null;
  private length: number = 0;

  /**
   * Create an ImmutableLinkedList
   * @param  {T[]=[]} initialValues - values of the list
   */
  constructor(initialValues: T[] = []) {
    initialValues.forEach((element) => this.push(element));
  }

  *[Symbol.iterator](): Iterator<T> {
    for (let node = this.head; node; node = node.next) {
      yield node.value;
    }
  }

  /** Private method to push elements into
   * the list and update the length
   * @param  {T} element - element you intend to insert
   */
  private push(element: T): void {
    const node = new Element<T>(element);
    let current: Element<T> | null = null;
    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.length++;
  }

  /** method adds one element to the end of an
   * ImmutableLinkedList and returns a new ImmutableLinkedList
   * @param  {T} element
   * @returns {ImmutableLinkedList<T>}
   */
  public add(element: T): ImmutableLinkedList<T> {
    return new ImmutableLinkedList<T>([...this, element]);
  }

  /** Remove elements from a list, delete all entries that are equal to the
   * parameter and return a new ImmutableLinkedList
   * @param  {T} element - element you want to remove from the list.
   * @returns {ImmutableLinkedList<T>}
   */
  public remove(element: T): ImmutableLinkedList<T> {
    const newList = new ImmutableLinkedList<T>();
    for (let current of this) {
      if (current !== element) {
        newList.push(current);
      }
    }

    return newList;
  }

  /** Creates an array of values by running each element in the ImmutableLinkedList
   * thru iteratee.
   *
   * @param  {(element:T)=>TMap} callback - The iteratee. it is invoked with one argument:
   * (value).
   * @return {Array<TMap>} Returns the new mapped array.
   */
  public map<TMap>(callback: (element: T) => TMap): Array<TMap> {
    const returnArray: TMap[] = [];
    for (let current of this) {
      returnArray.push(callback(current));
    }
    return returnArray;
  }

  /** The filter() method creates a new list with all
   *  elements that pass the test implemented by the provided function.
   * @param  {(element:T)=>boolean} callback - predicate function to invoke per iteration
   *  The predicate is invoked with one argument: (value).
   * @returns {ImmutableLinkedList<T>} Returns a new filtered ImmutableLinkedList
   */
  public filter(callback: (element: T) => boolean): ImmutableLinkedList<T> {
    const newList = new ImmutableLinkedList<T>();
    for (let current of this) {
      if (callback(current) === true) {
        newList.push(current);
      }
    }
    return newList;
  }

  /** Checks if value is in the ImmutableList
   * @param  {T} element
   * @returns {boolean} Returns true if value is found, else false
   */
  public includes(element: T): boolean {
    let isElementPresent: boolean = false;

    for (let current of this) {
      if (current === element) {
        isElementPresent = true;
        break;
      }
    }

    return isElementPresent;
  }

  /**
   * returns converted ImmutableLinkedList into string as Array.prototype.toString() see
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toString
   * @returns {string} stringified ImmutableLinkedList
   */
  public toString(): string {
    return [...this].toString();
  }

  /**
   * Returns the size of the ImmutableLinkedList
   * @returns number
   */
  public getSize(): number {
    return this.length;
  }
}
