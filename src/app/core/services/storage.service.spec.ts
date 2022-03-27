import {StorageService} from "./storage.service";

describe('LocalStorageService', () => {
  const storage = {} as Storage;
  let service: StorageService;

  beforeEach(() => {
    service = new StorageService(storage);
  });

  describe('isKeyExists', () => {
    it('should return true', () => {
      storage.getItem = jasmine.createSpy('getItem').and.returnValue('{}');
      const key = 'testKey';

      const result = service.isKeyExists(key);

      expect(result).toBeTrue();
      expect(storage.getItem).toHaveBeenCalledWith(key);
    });
    it('should return false', () => {
      storage.getItem = jasmine.createSpy('getItem').and.returnValue(null);
      const key = 'testKey';

      const result = service.isKeyExists(key);

      expect(result).toBeFalse();
      expect(storage.getItem).toHaveBeenCalledWith(key);
    });
  });

  describe('get', () => {
    it('should return test object', () => {
      storage.getItem = jasmine.createSpy('getItem').and.returnValue('{"key": "value"}');
      const key = 'testKey';

      const result = service.get(key);

      expect(result).toEqual({'key': 'value'});
      expect(storage.getItem).toHaveBeenCalledWith(key);
    });

    it('should throw error undefined key', () => {
      storage.getItem = jasmine.createSpy('getItem').and.returnValue(null);
      const key = 'testKey';

      expect(function () { service.get(key); }).toThrow(new Error('Undefined key testKey'));
    });
  });

  describe('set', () => {
    it('should call setItem method with given params', () => {
      storage.setItem = jasmine.createSpy('setItem');
      const key = 'testKey';

      service.set(key, {'testKey': 'testValue'});

      expect(storage.setItem).toHaveBeenCalledWith(key, '{"testKey":"testValue"}');
    });
  });
});
