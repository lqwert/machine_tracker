import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsPage } from './settings.page';
import { MachinesPage } from './machines/machines.page';

const routes: Routes = [
  {
    path: '',
    component: SettingsPage
  },
  // {
  //   path: 'machines',
  //   component: MachinesPage
  // },
  {
    path: 'machines',
    loadChildren: () => import('./machines/machines.module').then( m => m.MachinesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsPageRoutingModule {}
