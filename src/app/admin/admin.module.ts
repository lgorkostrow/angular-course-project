import { NgModule } from '@angular/core';
import {SharedModule} from "../shared/shared.module";
import {AdminRoutingModule} from "./admin-routing.module";
import { AdminDashboardPageComponent } from './components/admin-dashboard-page/admin-dashboard-page.component';
import { AdminProductsPageComponent } from './components/admin-products-page/admin-products-page.component';
import { AdminProductEditPageComponent } from './components/admin-product-edit-page/admin-product-edit-page.component';
import { AdminProductCreatePageComponent } from './components/admin-product-create-page/admin-product-create-page.component';
import { AdminComponent } from './components/admin/admin.component';
import {MatListModule} from "@angular/material/list";

@NgModule({
  declarations: [
    AdminDashboardPageComponent,
    AdminProductsPageComponent,
    AdminProductEditPageComponent,
    AdminProductCreatePageComponent,
    AdminComponent
  ],
  imports: [
    SharedModule,
    MatListModule,
    AdminRoutingModule,
  ]
})
export class AdminModule { }
