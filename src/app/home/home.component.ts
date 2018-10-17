import { Component, OnInit } from '@angular/core';

import { ModuleService } from '../core/services/module.service';
import { Module } from '../core/models/module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public modules: Module[];

  constructor(
    private moduleService: ModuleService,
  ) {
  }

  ngOnInit() {
    this.moduleService.getAll()
      .subscribe(modules => this.modules = modules);
  }

  set(id:number){
    this.moduleService.setCurrent(id);
  }
}
