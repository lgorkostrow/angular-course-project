import {OrderByPipe} from "./order-by.pipe";

describe('OrderByPipe', () => {
  let pipe: OrderByPipe;

  beforeEach(() => {
    pipe = new OrderByPipe();
  });

  describe('transform', () => {
    it('should return an empty array for a given empty array', () => {
      // Act
      const res = pipe.transform([], 'testField', true);

      // Assert
      expect(res).toEqual([]);
    });

    it('should sort a string field in the ascending order', () => {
      // Arrange
      const arr = [
        {testField: 'zz'},
        {testField: 'zx'},
        {testField: 'zzz'},
      ];
      const expected = [
        {testField: 'zx'},
        {testField: 'zz'},
        {testField: 'zzz'},
      ];

      // Act
      const res = pipe.transform(arr, 'testField', true);

      // Assert
      expect(res).toEqual(expected);
    });

    it('should sort a string field in the descending order', () => {
      // Arrange
      const arr = [
        {testField: 'zz'},
        {testField: 'zx'},
        {testField: 'zzz'},
      ];
      const expected = [
        {testField: 'zzz'},
        {testField: 'zz'},
        {testField: 'zx'},
      ];

      // Act
      const res = pipe.transform(arr, 'testField', false);

      // Assert
      expect(res).toEqual(expected);
    });

    it('should sort a number field in the ascending order', () => {
      // Arrange
      const arr = [
        {testField: 7},
        {testField: 5},
        {testField: 6},
      ];
      const expected = [
        {testField: 5},
        {testField: 6},
        {testField: 7},
      ];

      // Act
      const res = pipe.transform(arr, 'testField', true);

      // Assert
      expect(res).toEqual(expected);
    });

    it('should sort a number field in the descending order', () => {
      // Arrange
      const arr = [
        {testField: 7},
        {testField: 5},
        {testField: 6},
      ];
      const expected = [
        {testField: 7},
        {testField: 6},
        {testField: 5},
      ];

      // Act
      const res = pipe.transform(arr, 'testField', false);

      // Assert
      expect(res).toEqual(expected);
    });

    it('should throw an error for an undefined field', () => {
      // Arrange
      const arr = [
        {testField: 7},
        {testField: 5},
        {testField: 6},
      ];

      // Act and Assert
      expect(() => pipe.transform(arr, 'field', false))
        .toThrowError('Undefined field');
    });
  });
});
