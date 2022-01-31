class Element<T> {
  constructor(public value: T, public next: Element<T> | null = null) {}
}

export class ImmutableLinkedList<T> {
  private head: Element<T> | null = null;
  private length: number = 0;

  constructor(initialValues: T[] = []) {
    initialValues.forEach((element) => this.push(element));
  }

  *[Symbol.iterator](): Iterator<T> {
    for (let node = this.head; node; node = node.next) {
      yield node.value;
    }
  }

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

  public add(element: T): ImmutableLinkedList<T> {
    return new ImmutableLinkedList<T>([...this, element]);
  }

  public remove(element: T): ImmutableLinkedList<T> {
    const newList = new ImmutableLinkedList<T>();
    for (let current of this) {
      if (current !== element) {
        newList.push(current);
      }
    }

    return newList;
  }

  public map<TMap>(callback: (element: T) => TMap): Array<TMap> {
    const returnArray: TMap[] = [];
    for (let current of this) {
      returnArray.push(callback(current));
    }
    return returnArray;
  }

  public filter(callback: (element: T) => boolean): ImmutableLinkedList<T> {
    const newList = new ImmutableLinkedList<T>();
    for (let current of this) {
      if (callback(current) === true) {
        newList.push(current);
      }
    }
    return newList;
  }

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

  public toString(): string {
    return [...this].toString();
  }

  public getSize(): number {
    return this.length;
  }
}
