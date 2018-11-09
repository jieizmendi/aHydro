import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";

import { ModuleService } from "../../../core/services/module.service";
import { Module } from "../../../core/models/module";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit, OnDestroy {
  module: Module = null;
  private subscription: Subscription = null;

  semaphore = {
    air_temperature: 'red',
    water_temperature: 'red',
    humidity: 'red',
    ec: 'red',
    ph: 'red',
  }
  
  constructor(private moduleService: ModuleService) {}

  ngOnInit() {
    this.subscription = this.moduleService
      .getCuerrent()
      .subscribe(_module => {
        this.module = _module;
        if(this.module.configs && this.module.status)
        {this.semaphore.air_temperature = this.semaphoreColorCalculator(this.module.status.air_temperature, this.module.configs.air_temperature, 10);
        this.semaphore.water_temperature = this.semaphoreColorCalculator(this.module.status.water_temperature, this.module.configs.water_temperature, 10);
        this.semaphore.humidity = this.semaphoreColorCalculator(this.module.status.humidity, this.module.configs.humidity, 10);
        this.semaphore.ec = this.semaphoreColorCalculator(this.module.status.ec, this.module.configs.ec, 5);
        this.semaphore.ph = this.semaphoreColorCalculator(this.module.status.ph, this.module.configs.ph, 2);}
      });
  }

  ngOnDestroy() {
    if (this.subscription !== null) {
      this.subscription.unsubscribe();
    }
  }

  semaphoreColorCalculator(value: number, ref: number, error: number = 0){
    if(error == 0)
    {
      if(value == ref) return 'green';
      if(value <= ref*1.1 && value >= ref*0.9) return 'yellow';
      return 'red';
    }
    error/=100;
    if(value <= ref*(1+error) && value >= ref*(1-error)) return 'green';
    if(value <= ref*(1+error*2) && value >= ref*(1-error*2)) return 'yellow';
    return 'red';
  }

}
