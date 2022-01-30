

class Element<T> {
  constructor(public value: T, public next: Element<T> | null = null) {}
}

export class ImmutableLinkedList<T> {
  private head: Element<T> | null = null;
  private length: number = 0;

  constructor(initialValues:T[] = []) {
    initialValues.forEach((element) => (this.add(element)));
  }

  *[Symbol.iterator]() {
    for (let node = this.head; node; node = node.next) {
      yield node.value;
    }
  }

  public add(element: T): void {
    const node = new Element<T>(element);
    let current: Element<T> | null = null;
    if(this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      
      while(current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.length++;
  }

  public remove(element: T): ImmutableLinkedList<T> {
    const newList = new ImmutableLinkedList<T>();
    for(let current of this) {
      if(current !== element) {
        newList.add(current);
      }
    }

    return newList;
  }

  public map<TMap>(callback: (element: T) => TMap): Array<TMap> {
    const returnArray: TMap[] = [];
    for(let current of this) {
      returnArray.push(callback(current));
    }
    return returnArray;
  }

  public filter(callback: (element: T)=> boolean): ImmutableLinkedList<T> {
    const newList = new ImmutableLinkedList<T>();
    for(let current of this) {
      if(callback(current) === true) {
        newList.add(current);
      }
    }
    return newList;
  }

  public getSize(): number {
    return this.length;
  }
}

