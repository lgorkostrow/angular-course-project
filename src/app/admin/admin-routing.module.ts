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

const routes: Routes = [
  {
    path: '', canActivate: [AdminGuard], children: [
      {
        path: 'admin/product/edit/:productID',
        component: AdminProductEditPageComponent,
        ...resolveProductWithRedirect('/admin/products'),
      },
      { path: 'admin/product/add', component: AdminProductCreatePageComponent },
      { path: 'admin/products', component: AdminProductsPageComponent },
      { path: 'admin/dashboard', component: AdminDashboardPageComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
