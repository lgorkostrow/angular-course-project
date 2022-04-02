export class DropdownSelectItemModel<T> {
  constructor(
    public label: string,
    public value: T,
    public isDefault: boolean,
  ) {
  }
}
