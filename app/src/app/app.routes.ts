import { Route } from '@angular/router';
import { Home } from './pages/home/home';
import { Components } from './pages/components/components';

export const appRoutes: Route[] = [
  { path: '', pathMatch: 'full', component: Home },
  { path: 'components', component: Components },
];
