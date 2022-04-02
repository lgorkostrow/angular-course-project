import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DropdownSelectItemModel} from "../../models/dropdown-select-item.model";

@Component({
  selector: 'app-dropdown-select',
  templateUrl: './dropdown-select.component.html',
  styleUrls: ['./dropdown-select.component.scss']
})
export class DropdownSelectComponent<T> implements OnInit {
  @Input() placeholder!: string;
  @Output() itemSelected: EventEmitter<DropdownSelectItemModel<T>> = new EventEmitter<DropdownSelectItemModel<T>>();
  private _items: DropdownSelectItemModel<T>[] = [];
  @Input() get items(): DropdownSelectItemModel<T>[] {
    return this._items;
  }

  set items(value: DropdownSelectItemModel<T>[]) {
    this._items = value;

    const defaultValues = this._items.filter(x => x.isDefault);
    if (defaultValues.length > 0) {
      this.selectedItem = defaultValues[0];
    }
  }

  selectedItem!: DropdownSelectItemModel<T>;

  constructor() { }

  ngOnInit(): void {
  }

  onItemSelect(selectedItem: DropdownSelectItemModel<T>): void {
    this.itemSelected.emit(selectedItem);
  }
}
