import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { OrderonlineComponent } from './orderonline/orderonline.component';
import { EventsComponent } from './components/events/events.component';

export const routes: Routes = [ 
    { path: '', component: HomeComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'orderonline', component: OrderonlineComponent },
    { path: 'events', component: EventsComponent },
    { path: '**', redirectTo: '' }];




