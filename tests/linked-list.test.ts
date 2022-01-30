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
  });

  describe('includes', () => {
    it('should find the element and return true if found', () => {
      const initialValues = [1,2,3]
      const list = new ImmutableLinkedList<number>(initialValues);

      expect(list.includes(1)).toEqual(true);
      expect(list.includes(12)).toEqual(false);
    });
  });

  describe('toString', () => {
    it('should return a string', () => {
      const list = new ImmutableLinkedList([1,2,3]);
      const stringifiedList = list.toString();
      expect(typeof stringifiedList).toBe('string');
      expect(stringifiedList).toEqual('1,2,3')
    });

     it('should return a string array like format', () => {
      const arrayNumbers = [1,2,3];
      const arrayString = ['foo', 'bar', 'echo'];
      const listNumber = new ImmutableLinkedList(arrayNumbers)
      const listString = new ImmutableLinkedList(arrayString)
      
      expect(listNumber.toString()).toEqual(arrayNumbers.toString());
      expect(listString.toString()).toEqual(arrayString.toString());
    });
    
  })
})
