import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { ModuleService } from "../../../core/services/module.service";
import { Module } from "../../../core/models/module";
import { Subscription } from "rxjs";

@Component({
  selector: "app-configuration",
  templateUrl: "./configuration.component.html",
  styleUrls: ["./configuration.component.scss"]
})
export class ConfigurationComponent implements OnInit, OnDestroy {
  module: Module;
  private subscription: Subscription = null;

  nameControl: FormControl;
  luxControl: FormControl;

  constructor(private moduleService: ModuleService) {}

  ngOnInit() {
    this.subscription = this.moduleService
      .getCuerrent()
      .subscribe(module => (this.module = module));
    this.nameControl = new FormControl(this.module.name, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(15)
    ]);
    this.luxControl = new FormControl(this.module.configs.light, [
      Validators.required,
      Validators.pattern("[0-9]*"),
      Validators.min(10000),
      Validators.max(100000)
    ]);
  }

  ngOnDestroy() {
    if (this.subscription !== null) {
      this.subscription.unsubscribe();
    }
  }

  save() {
    if (this.nameControl.invalid || this.luxControl.invalid) return;
    this.module.name = this.nameControl.value;
    this.module.configs.light = this.luxControl.value;
    this.moduleService.update(this.module).subscribe();
  }

  reset() {
    this.module.start_at = new Date();
    this.moduleService.update(this.module).subscribe();
  }
}
