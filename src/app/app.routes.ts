import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./features/landing/landing.routes').then(m => m.LANDING_ROUTES)
    }
    // {
    //     path: 'auth',
    //     loadChildren: () => import('./features/auth/auth.routes').then(m => m.AUTH_ROUTES)
    // },
    // {
    //     path: 'certificados',
    //     loadChildren: () => import('./features/certificados/certificados.routes').then(m => m.CERT_ROUTES)
    // },
    // {
    //     path: 'admin',
    //     loadChildren: () => import('./features/admin/admin.routes').then(m => m.ADMIN_ROUTES)
    // }
];
