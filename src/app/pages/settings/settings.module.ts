import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingsPageRoutingModule } from './settings-routing.module';
//DECLARATIONS
import { SettingsPage } from './settings.page';
//SERVICES
import { MachineService } from 'src/app/shared';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettingsPageRoutingModule
  ],
  declarations: [
    SettingsPage
  ],
  providers: [
  ]

})
export class SettingsPageModule {}
