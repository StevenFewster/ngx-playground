import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./pages/home/home').then((c) => c.Home),
  },
  {
    path: 'components',
    loadComponent: () =>
      import('./pages/components/components').then((c) => c.Components),
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () =>
          import('./pages/components/typography/typography').then(
            (c) => c.Typography,
          ),
      },
      {
        path: 'typography',
        pathMatch: 'full',
        loadComponent: () =>
          import('./pages/components/typography/typography').then(
            (c) => c.Typography,
          ),
      },
      {
        path: 'colors',
        pathMatch: 'full',
        loadComponent: () =>
          import('./pages/components/colors/colors').then((c) => c.Colors),
      },
      {
        path: 'checkbox',
        pathMatch: 'full',
        loadComponent: () =>
          import('./pages/components/checkbox/checkbox').then(
            (c) => c.Checkbox,
          ),
      },
      {
        path: 'chips',
        pathMatch: 'full',
        loadComponent: () =>
          import('./pages/components/chips/chips').then((c) => c.Chips),
      },
      {
        path: 'datepicker',
        pathMatch: 'full',
        loadComponent: () =>
          import('./pages/components/datepicker/datepicker').then(
            (c) => c.Datepicker,
          ),
      },
      {
        path: 'dialog',
        pathMatch: 'full',
        loadComponent: () =>
          import('./pages/components/dialog/dialog').then((c) => c.Dialog),
      },
      {
        path: 'expansion-panel',
        pathMatch: 'full',
        loadComponent: () =>
          import('./pages/components/expansion-panel/expansion-panel').then(
            (c) => c.ExpansionPanel,
          ),
      },
      {
        path: 'form-field',
        pathMatch: 'full',
        loadComponent: () =>
          import('./pages/components/form-field/form-field').then(
            (c) => c.FormField,
          ),
      },
      {
        path: 'menu',
        pathMatch: 'full',
        loadComponent: () =>
          import('./pages/components/menu/menu').then((c) => c.Menu),
      },
      {
        path: 'progress',
        pathMatch: 'full',
        loadComponent: () =>
          import('./pages/components/progress/progress').then(
            (c) => c.Progress,
          ),
      },
      {
        path: 'radio',
        pathMatch: 'full',
        loadComponent: () =>
          import('./pages/components/radio/radio').then((c) => c.Radio),
      },
      {
        path: 'select',
        pathMatch: 'full',
        loadComponent: () =>
          import('./pages/components/select/select').then((c) => c.Select),
      },
      {
        path: 'side-nav',
        pathMatch: 'full',
        loadComponent: () =>
          import('./pages/components/side-nav/side-nav').then((c) => c.SideNav),
      },
      {
        path: 'slide-toggle',
        pathMatch: 'full',
        loadComponent: () =>
          import('./pages/components/slide-toggle/slide-toggle').then(
            (c) => c.SlideToggle,
          ),
      },
      {
        path: 'slider',
        pathMatch: 'full',
        loadComponent: () =>
          import('./pages/components/slider/slider').then((c) => c.Slider),
      },
      {
        path: 'snackbar',
        pathMatch: 'full',
        loadComponent: () =>
          import('./pages/components/snackbar/snackbar').then(
            (c) => c.Snackbar,
          ),
      },
      {
        path: 'stepper',
        pathMatch: 'full',
        loadComponent: () =>
          import('./pages/components/stepper/stepper').then((c) => c.Stepper),
      },
      {
        path: 'table',
        pathMatch: 'full',
        loadComponent: () =>
          import('./pages/components/table/table').then((c) => c.Table),
      },
    ],
  },
];
