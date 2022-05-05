import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {IsEmptyCartGuard} from "../shared/guards/is-empty-cart.guard";
import {ProcessOrderPageComponent} from "./components/process-order-page/process-order-page.component";

const routes: Routes = [
  { path: 'process-order', component: ProcessOrderPageComponent, canActivate: [IsEmptyCartGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule {}
