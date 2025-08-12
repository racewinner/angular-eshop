import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'landing',
    loadComponent: () => import('./feature/landing/landing').then(m => m.Landing)
  },
  {
    path: 'login',
    loadComponent: () => import('./feature/auth/login/login').then(m => m.Login)
  },
  {
    path: 'register',
    loadComponent: () => import('./feature/auth/register/register').then(m => m.Register)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./feature/dashboard/dashboard.routes').then(m => m.routes),
    canActivate: [authGuard]
  },
  {
    path: '**',
    redirectTo: ''
  }
];
