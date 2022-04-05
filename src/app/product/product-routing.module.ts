import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ProductListPageComponent} from "./components/product-list-page/product-list-page.component";
import {ProductViewPageComponent} from "./components/product-view-page/product-view-page.component";

const routes: Routes = [
  { path: 'products/:productID', component: ProductViewPageComponent },
  { path: 'products', component: ProductListPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {}
