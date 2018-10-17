import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";

import { ModuleService } from "../core/services/module.service";
import { Module } from "../core/models/module";

@Component({
  selector: "app-modules",
  templateUrl: "./modules.component.html",
  styleUrls: ["./modules.component.scss"]
})
export class ModulesComponent implements OnInit, OnDestroy {
  module: Module = null;
  private subscription: Subscription = null;

  constructor(
    private moduleService: ModuleService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params =>
      this.moduleService.setCurrent(params.id)
    );
  }

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
