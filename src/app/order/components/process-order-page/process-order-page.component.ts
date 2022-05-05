import { Component, OnInit } from '@angular/core';
import {PersonalInformation} from "../../models/personal-information.model";
import {OrderFacade} from "../../services/order.facade";

@Component({
  selector: 'app-process-order',
  templateUrl: './process-order-page.component.html',
  styleUrls: ['./process-order-page.component.scss']
})
export class ProcessOrderPageComponent implements OnInit {
  constructor(private orderFacade: OrderFacade) { }

  ngOnInit(): void {}

  onFormSubmit(personalInformation: PersonalInformation): void {
    this.orderFacade.createOrder(personalInformation);
  }
}
