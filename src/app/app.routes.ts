import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServicesCompanyComponent } from './components/services-company/services-company.component';
import { CarouselTryComponent } from './components/carousel-try/carousel-try.component';
import { CarouselHeadertopComponent } from './components/carousel-headertop/carousel-headertop.component';
import { CarouselWithBackgroundComponent } from './components/carousel-with-background/carousel-with-background.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'servicesCompany', component: ServicesCompanyComponent},
    {path: 'carousel-try', component: CarouselTryComponent},
    {path: 'carousel-headertop', component: CarouselHeadertopComponent},
    {path: 'carousel-with-background', component: CarouselWithBackgroundComponent},
];
