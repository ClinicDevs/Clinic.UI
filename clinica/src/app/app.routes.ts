import { Routes } from '@angular/router';
import { LoginComponent } from './components/identity-component/login/login.component';
import { RegisterComponent } from './components/identity-component/register/register.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';

export const routes: Routes = [
    {path : 'login', component : LoginComponent},
    {path: 'register', component : RegisterComponent},
    {path: 'home',component:HomeComponent},
    {path:'',component:HomeComponent},
    {path:'**',component:NotFoundComponent}
];
