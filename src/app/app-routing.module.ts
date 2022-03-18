import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SendOfferFormComponent } from './pages/send-offer-form/send-offer-form.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'list' },
  {
    path: 'list',
    component: HomePageComponent,
    children: [
      {
        path: 'offer/:id',
        component: SendOfferFormComponent,
      },
    ],
  },
  {
    path: 'list/:id',
    component: DetailsPageComponent,
    children: [
      {
        path: 'offer',
        component: SendOfferFormComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
