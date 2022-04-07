import {RouterModule, Routes} from "@angular/router";
import {resolveProductWithRedirect} from "../shared/guards/product.resolver";
import {NgModule} from "@angular/core";
import {AdminDashboardPageComponent} from "./components/admin-dashboard-page/admin-dashboard-page.component";
import {AdminProductsPageComponent} from "./components/admin-products-page/admin-products-page.component";
import {
  AdminProductCreatePageComponent
} from "./components/admin-product-create-page/admin-product-create-page.component";
import {AdminProductEditPageComponent} from "./components/admin-product-edit-page/admin-product-edit-page.component";
import {AdminGuard} from "../shared/guards/admin.guard";
import {AdminComponent} from "./components/admin/admin.component";

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: 'product/edit/:productID',
        component: AdminProductEditPageComponent,
        ...resolveProductWithRedirect('/admin/products'),
      },
      { path: 'product/add', component: AdminProductCreatePageComponent },
      { path: 'products', component: AdminProductsPageComponent },
      { path: 'dashboard', component: AdminDashboardPageComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
