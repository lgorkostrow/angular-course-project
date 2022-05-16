import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ProductListPageComponent} from "./components/product-list-page/product-list-page.component";
import {ProductViewPageComponent} from "./components/product-view-page/product-view-page.component";
import {storeProductResolver} from "../shared/guards/product.resolver";
import {fetchProduct} from "./store/product.actions";

const routes: Routes = [
  {
    path: 'products',
    children: [
      {
        path: ':productID',
        component: ProductViewPageComponent,
        ...storeProductResolver('products', fetchProduct),
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
