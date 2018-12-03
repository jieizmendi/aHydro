import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulesComponent } from './modules.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MaterialModule } from '../core/material.module'
import { ModulesRoutingModule } from './modules-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { HistoricalsComponent } from './components/historicals/historicals.component';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {SparklineComponent} from './components/historicals/sparkline.component';

@NgModule({
  imports: [
    CommonModule,
    ModulesRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxChartsModule
  ],
  declarations: [
    ConfigurationComponent,
    DashboardComponent,
    ModulesComponent,
    TasksComponent,
    AddTaskComponent,
    HistoricalsComponent,
    SparklineComponent
  ]
})
export class ModulesModule { }
