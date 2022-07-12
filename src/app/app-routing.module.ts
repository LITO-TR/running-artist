import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {OffersComponent} from "./offers/pages/offers/offers.component";
import {CurrentOffersComponent} from "./current-offers/pages/current-offers/current-offers.component";

const routes: Routes = [

  { path: 'offers', component: OffersComponent},
  { path: 'currents-offers', component:CurrentOffersComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
