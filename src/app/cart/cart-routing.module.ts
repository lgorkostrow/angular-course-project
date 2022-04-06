import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CartComponent} from "./components/cart/cart.component";

const routes: Routes = [
  { path: 'carts', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule {}
