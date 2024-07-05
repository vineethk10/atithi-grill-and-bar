import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [ 
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'contact', component: ContactComponent }];




