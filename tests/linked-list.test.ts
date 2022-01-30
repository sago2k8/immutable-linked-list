import { ImmutableLinkedList } from '../src/main'

describe('ImmutableLinkedList unit tests', () => {
  describe('add', () => {
    it('should add elements to the list', () => {
      const list = new ImmutableLinkedList<number>();
      list.add(10);
      list.add(20);
      const listAsArray = [...list];
      expect(listAsArray.pop()).toBe(20);
      expect(listAsArray.pop()).toBe(10);
    });
  })

  describe('delete',  () => {
    it('should remove elements from the ImmutableList and return a new ImmutableList (unique)', () => {
      const list = new ImmutableLinkedList<number>()
      list.add(10)
      list.add(20)
      list.add(12);
      const elementToRemove = 20;
      const newAfterDeletionList = list.remove(elementToRemove);

      expect(list.getSize()).toBe(3);
      expect(newAfterDeletionList.getSize()).toBe(2);
      expect([...list].includes(elementToRemove)).toBe(true);
      expect([...newAfterDeletionList].includes(elementToRemove)).toBe(false);
    });

    it('should remove all elements if more than one coincidence', () => {
      const list = new ImmutableLinkedList<number>()
      list.add(10)
      list.add(20)
      list.add(20);

      const newAfterDeletionList = list.remove(20);

      expect(list.getSize()).toBe(3);
      expect(newAfterDeletionList.getSize()).toBe(1);
    });
  });

  describe('map', () => {
    it('should appy callback and return same type as the list by default', () => {
      const initialValues = [1,2,3,4,5,6];
      const expectedValues = [2,4,6,8,10,12];
      const list = new ImmutableLinkedList(initialValues);
      
      const resultArray = list.map((element) => element*2);
      expect(resultArray).toEqual(expectedValues);
      expect(resultArray.length).toEqual(list.getSize());
    });

    it('should return a list with a different type if requested', () => {
      const initialValues = [1, 2, 3];
      const expectedValues = ['1', '2', '3'];
      const list = new ImmutableLinkedList(initialValues);
      
      const resultArray = list.map<string>((element) => `${element}`);
      expect(resultArray).toEqual(expectedValues);
      expect(resultArray.length).toEqual(list.getSize());
    })
  });

  describe('filter', () => {
    it('should filter correctly and return the expect list',() => {
      const list = new ImmutableLinkedList<number>([1,2,3,4,5]);
      const onlyEvens = list.filter((element) => element % 2 === 0 );
      expect([...onlyEvens]).toEqual([2,4]);
    });
  })


  // xit('extract elements from the beginning of the list with shift', () => {
  //   const list = new ImmutableLinkedList<number>()
  //   list.push(10)
  //   list.push(20)
  //   expect(list.shift()).toBe(10)
  //   expect(list.shift()).toBe(20)
  // })

  // xit('add/extract elements from the beginning of the list with unshift/shift', () => {
  //   const list = new ImmutableLinkedList<number>()
  //   list.unshift(10)
  //   list.unshift(20)
  //   expect(list.shift()).toBe(20)
  //   expect(list.shift()).toBe(10)
  // })

  // xit('unshift/pop', () => {
  //   const list = new ImmutableLinkedList<number>()
  //   list.unshift(10)
  //   list.unshift(20)
  //   expect(list.pop()).toBe(10)
  //   expect(list.pop()).toBe(20)
  // })

  // xit('example', () => {
  //   const list = new ImmutableLinkedList<number>()
  //   list.push(10)
  //   list.push(20)
  //   expect(list.pop()).toBe(20)
  //   list.push(30)
  //   expect(list.shift()).toBe(10)
  //   list.unshift(40)
  //   list.push(50)
  //   expect(list.shift()).toBe(40)
  //   expect(list.pop()).toBe(50)
  //   expect(list.shift()).toBe(30)
  // })

  // xit('can count its elements', () => {
  //   const list = new ImmutableLinkedList<number>()
  //   expect(list.count()).toBe(0)
  //   list.push(10)
  //   expect(list.count()).toBe(1)
  //   list.push(20)
  //   expect(list.count()).toBe(2)
  // })

  // xit('sets head/tail after popping last element', () => {
  //   const list = new ImmutableLinkedList<number>()
  //   list.push(10)
  //   list.pop()
  //   list.unshift(20)
  //   expect(list.count()).toBe(1)
  //   expect(list.pop()).toBe(20)
  // })

  // xit('sets head/tail after shifting last element', () => {
  //   const list = new ImmutableLinkedList<number>()
  //   list.unshift(10)
  //   list.shift()
  //   list.push(20)
  //   expect(list.count()).toBe(1)
  //   expect(list.shift()).toBe(20)
  // })

  // xit('deletes the element with the specified value from the list', () => {
  //   const list = new ImmutableLinkedList<number>()
  //   list.push(10)
  //   list.push(20)
  //   list.push(30)
  //   list.delete(20)
  //   expect(list.count()).toBe(2)
  //   expect(list.pop()).toBe(30)
  //   expect(list.shift()).toBe(10)
  // })

  // xit('deletes the only element', () => {
  //   const list = new ImmutableLinkedList<number>()
  //   list.push(10)
  //   list.delete(10)
  //   expect(list.count()).toBe(0)
  // })

  // xit('delete does not modify the list if the element is not found', () => {
  //   const list = new ImmutableLinkedList<number>()
  //   list.push(10)
  //   list.delete(20)
  //   expect(list.count()).toBe(1)
  // })
})
