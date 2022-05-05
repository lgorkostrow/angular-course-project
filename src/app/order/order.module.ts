import {NgModule} from "@angular/core";
import {SharedModule} from "../shared/shared.module";
import {OrderRoutingModule} from "./order-routing.module";
import {ProcessOrderPageComponent} from "./components/process-order-page/process-order-page.component";
import { OrderFormComponent } from './components/process-order-page/order-form/order-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    ProcessOrderPageComponent,
    OrderFormComponent,
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    OrderRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
  ],
  exports: [
    ProcessOrderPageComponent,
  ],
})
export class OrderModule { }
