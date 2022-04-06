import { NgModule } from '@angular/core';
import {SharedModule} from "../shared/shared.module";
import {AdminRoutingModule} from "./admin-routing.module";
import { AdminDashboardPageComponent } from './components/admin-dashboard-page/admin-dashboard-page.component';
import { AdminProductsPageComponent } from './components/admin-products-page/admin-products-page.component';
import { AdminProductEditPageComponent } from './components/admin-product-edit-page/admin-product-edit-page.component';
import { AdminProductCreatePageComponent } from './components/admin-product-create-page/admin-product-create-page.component';

@NgModule({
  declarations: [
    AdminDashboardPageComponent,
    AdminProductsPageComponent,
    AdminProductEditPageComponent,
    AdminProductCreatePageComponent
  ],
  imports: [
    SharedModule,
    AdminRoutingModule,
  ]
})
export class AdminModule { }
