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

  constructor(private moduleService: ModuleService) {}

  ngOnInit() {
    this.subscription = this.moduleService
      .getCuerrent()
      .subscribe(_module => (this.module = _module));
  }

  ngOnDestroy() {
    if (this.subscription !== null) {
      this.subscription.unsubscribe();
    }
  }
}
