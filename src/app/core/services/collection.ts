export class Collection<T> {
  private _items: T[];
  private readonly _onChange: (newList: T[]) => void;

  constructor(items: T[], onChange: (newList: T[]) => void) {
    this._items = items;
    this._onChange = onChange;
  }

  find(predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: any): T | undefined {
    return this._items.find(predicate, thisArg);
  }

  findIndex(predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: any): number {
    return this._items.findIndex(predicate, thisArg);
  }

  reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U {
    return this._items.reduce(callbackfn, initialValue);
  }

  push(...items: T[]): number {
    const res = this._items.push(...items);
    this._onChange(this._items);

    return res;
  }

  removeAtIndex(idx: number): void {
    this._items.splice(idx, 1);
    this._onChange(this._items);
  }

  replaceAtIndex(idx: number, newItem: T): void {
    this._items[idx] = newItem;
    this._onChange(this._items);
  }

  clear(): void {
    this._items = [];
    this._onChange(this._items);
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  toArray(): T[] {
    return this._items;
  }
}
