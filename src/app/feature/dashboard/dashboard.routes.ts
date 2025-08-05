import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/layout').then(m => m.Layout),
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/ag-grid/ag-grid').then(m => m.AgGrid)
      }
    ]
  }
];
