import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { OffersComponent } from './offers/offers.component';
import { ReccomendationsComponent } from './reccomendations/reccomendations.component';

const routes: Routes = [
  { path: 'about-us', component: AboutUsComponent},
  { path: 'offers', component: OffersComponent},
  { path: 'recommendations', component: ReccomendationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
