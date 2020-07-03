import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { TimeService, TimeModel } from 'src/app/shared';
import { ActivatedRoute } from '@angular/router';
import { SettingsService } from 'src/app/shared/_settings/settings.service';
import { ToastController } from '@ionic/angular';



@Component({
  selector: 'app-overview',
  templateUrl: './overview.page.html',
  styleUrls: ['./overview.page.scss'],
})
export class OverviewPage implements OnInit {

  timeDay: TimeModel[];

  constructor(
    private timeService: TimeService,
    private ref: ChangeDetectorRef,
    public activeRoute: ActivatedRoute,
    public toastController: ToastController,  
  ) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(_ => {
      this.getWorkToday();
    })
  }

  getWorkToday() {
    this.timeService.getToday().subscribe(res => {
      console.log(res);
      this.timeDay = res;   
      this.ref.detectChanges();   
    })
  }

  async print() {
    const toast = await this.toastController.create({
      header: 'Development info',
      message: 'One day you will press this and can print your work ;)',
      duration: 2000,
      position: 'middle',
    });
    toast.present();
  }

}
