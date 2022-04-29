import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../../store/app.reducer";
import {selectOrderState} from "../../../store/order.selectors";
import {map} from "rxjs/operators";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-process-order',
  templateUrl: './process-order.component.html',
  styleUrls: ['./process-order.component.scss']
})
export class ProcessOrderComponent implements OnInit {
  totalSum: Observable<number> = of(0);

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.totalSum = this.store.select(selectOrderState).pipe(
      map(state => state.totalSum)
    );
  }

}
