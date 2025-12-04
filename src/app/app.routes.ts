import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Employee } from './employee/employee';
import { About } from './about/about';
import { Services } from './services/services';
import { Pagenotfound } from './pagenotfound/pagenotfound';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'employees', component: Employee },
  { path: 'about', component: About },
  { path: 'services', component: Services },
  { path: '**', component: Pagenotfound }
];