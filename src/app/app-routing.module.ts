import { HomeComponent } from './home/home.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { OffersComponent } from './offers/offers.component';
import { WeddingsComponent } from './weddings/weddings.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { FoodBeverageComponent } from './food-beverage/food-beverage.component';
import { CelebrationsComponent } from './celebrations/celebrations.component';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotelComponent } from './hotel/hotel.component';
import { RooftopComponent } from './rooftop/rooftop.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: 'accomodation', component: AccomodationComponent},
  { path: 'celebrations', component: CelebrationsComponent},
  { path: 'food-beverage', component: FoodBeverageComponent},
  { path:'foodbeverage',
    redirectTo: 'food-beverage',
    pathMatch: 'full'
  },
  { path: 'contact', component: ContactComponent},
  { path: 'rooftop', component: RooftopComponent},
  { path: 'hotel', component: HotelComponent},
  { path: 'lifestyle', component: LifestyleComponent},
  { path: 'weddings', component: WeddingsComponent},
  { path: 'offers', component: OffersComponent},
  { path: 'signin', component: SigninComponent},
  { path: 'signup', component: SignupComponent},
  { path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
