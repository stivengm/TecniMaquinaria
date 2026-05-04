import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./features/landing/landing.routes').then(m => m.LANDING_ROUTES)
    },
    {
        path: 'usuario',
        loadChildren: () => import('./features/auth/auth.routes').then(m => m.AUTH_ROUTES)
    },
    {
        path: 'certificados',
        loadChildren: () => import('./features/certificados/pages/certificados.routes').then(m => m.CERTIFICADOS_ROUTES)
    },
    {
        path: 'cursos',
        loadChildren: () => import('./features/cursos/cursos.routes').then(m => m.CURSOS_ROUTES)
    },
    {
        path: 'nosotros',
        loadChildren: () => import('./features/nosotros/nosotros.routes').then(m => m.NOSOTROS_ROUTES)
    }
    // {
    //     path: 'admin',
    //     loadChildren: () => import('./features/admin/admin.routes').then(m => m.ADMIN_ROUTES)
    // }
];
