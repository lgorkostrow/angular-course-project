import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ProductListPageComponent} from "./components/product-list-page/product-list-page.component";
import {ProductViewPageComponent} from "./components/product-view-page/product-view-page.component";
import {resolveProductWithRedirect} from "../shared/guards/product.resolver";
import {ProductComponent} from "./components/product/product.component";

const routes: Routes = [
  {
    path: 'products',
    component: ProductComponent,
    children: [
      {
        path: ':productID',
        component: ProductViewPageComponent,
        ...resolveProductWithRedirect('/products'),
      },
      { path: '', component: ProductListPageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {}
