import { ImmutableLinkedList } from '../src/main';

describe('ImmutableLinkedList unit tests', () => {
  describe('getSize', () => {
    it('should return 0 when empty', () => {
      const list = new ImmutableLinkedList<string>();
      expect(list.getSize()).toEqual(0);
    });

    it('should update the size when adding', () => {
      const list = new ImmutableLinkedList<number>();
      const updatedList = list.add(100);
      expect(list.getSize()).toEqual(0);
      expect(updatedList.getSize()).toEqual(1);
    });

    it('size should be updated when initializing with an arbitrary array', () => {
      const list = new ImmutableLinkedList<number>([1, 2, 3]);
      expect(list.getSize()).toEqual(3);
    });
  });

  describe('add', () => {
    it('should add elements to the list', () => {
      const list = new ImmutableLinkedList<number>([1, 2, 10]);
      const updatedList = list.add(20);
      const listAsArray = [...updatedList];
      expect(listAsArray.pop()).toBe(20);
      expect(listAsArray.pop()).toBe(10);
    });
  });

  describe('remove', () => {
    it('should remove elements from the ImmutableList and return a new ImmutableList (unique)', () => {
      const list = new ImmutableLinkedList<number>([10, 15, 20]);
      const elementToRemove = 20;
      const newAfterDeletionList = list.remove(elementToRemove);

      expect(list.getSize()).toBe(3);
      expect(newAfterDeletionList.getSize()).toBe(2);
      expect([...list].includes(elementToRemove)).toBe(true);
      expect([...newAfterDeletionList].includes(elementToRemove)).toBe(false);
    });

    it('should remove all elements if more than one coincidence', () => {
      const list = new ImmutableLinkedList<number>([10, 20, 20]);
      const newAfterDeletionList = list.remove(20);
      expect(list.getSize()).toBe(3);
      expect(newAfterDeletionList.getSize()).toBe(1);
    });
  });

  describe('map', () => {
    it('should appy callback and return same type as the list by default', () => {
      const initialValues = [1, 2, 3, 4, 5, 6];
      const expectedValues = [2, 4, 6, 8, 10, 12];
      const list = new ImmutableLinkedList(initialValues);

      const resultArray = list.map((element) => element * 2);
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
    });
  });

  describe('filter', () => {
    it('should filter correctly and return the expect list', () => {
      const list = new ImmutableLinkedList<number>([1, 2, 3, 4, 5]);
      const onlyEvens = list.filter((element) => element % 2 === 0);
      expect([...onlyEvens]).toEqual([2, 4]);
    });
  });

  describe('includes', () => {
    it('should find the element and return true if found', () => {
      const initialValues = [1, 2, 3];
      const list = new ImmutableLinkedList<number>(initialValues);

      expect(list.includes(1)).toEqual(true);
      expect(list.includes(12)).toEqual(false);
    });
  });

  describe('toString', () => {
    it('should return a string', () => {
      const list = new ImmutableLinkedList([1, 2, 3]);
      const stringifiedList = list.toString();
      expect(typeof stringifiedList).toBe('string');
      expect(stringifiedList).toEqual('1,2,3');
    });

    it('should return a string array like format', () => {
      const arrayNumbers = [1, 2, 3];
      const arrayString = ['foo', 'bar', 'echo'];
      const listNumber = new ImmutableLinkedList(arrayNumbers);
      const listString = new ImmutableLinkedList(arrayString);

      expect(listNumber.toString()).toEqual(arrayNumbers.toString());
      expect(listString.toString()).toEqual(arrayString.toString());
    });
  });
});
