import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'scanner',
    component: TabsPage,
    children: [
      {
        path: 'scanner',
        loadChildren: () => import('../pages/scanner/scanner.module').then(m => m.ScannerPageModule)
      },
      {
        path: 'overview',
        loadChildren: () => import('../pages/overview/overview.module').then(m => m.OverviewPageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../pages/settings/settings.module').then( m => m.SettingsPageModule)
      },
      {
        path: '',
        redirectTo: '/scanner/scanner',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/scanner/scanner',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
