import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { OrderonlineComponent } from './orderonline/orderonline.component';

export const routes: Routes = [ 
    { path: '', component: HomeComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'orderonline', component: OrderonlineComponent },
    { path: '**', redirectTo: '' }];




