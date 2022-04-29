import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../../store/app.reducer";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  showProgress: Observable<boolean> = of(false);

  constructor(
    protected store: Store<AppState>,
  ) { }
}
