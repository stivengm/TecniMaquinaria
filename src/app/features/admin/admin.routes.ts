import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Pagos } from './pages/pagos/pagos';
import { Usuarios } from './pages/usuarios/usuarios';

export const ADMIN_ROUTES: Routes = [
  { path: 'dashboard', component: Dashboard },
  { path: 'pagos', component: Pagos },
  { path: 'usuarios', component: Usuarios }
];