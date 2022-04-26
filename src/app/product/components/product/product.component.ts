import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../../store/app.reducer";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  showProgress: boolean = false;

  constructor(
    protected store: Store<AppState>,
  ) { }
}
