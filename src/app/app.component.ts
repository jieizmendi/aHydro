import { Component } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { ModuleService } from "./core/services/module.service";
import { DomSanitizer } from "@angular/platform-browser";

import { Module } from "./core/models/module";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  public modules: Module[];

  constructor(
    private moduleService: ModuleService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      `sun`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        "../assets/icons/Sun.svg"
      )
    );
    this.matIconRegistry.addSvgIcon(
      `pump`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        "../assets/icons/Pump.svg"
      )
    );
    this.matIconRegistry.addSvgIcon(
      `water`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        "../assets/icons/Water.svg"
      )
    );
    this.matIconRegistry.addSvgIcon(
      `light`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        "../assets/icons/Light.svg"
      )
    );
    this.matIconRegistry.addSvgIcon(
      `light1`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        "../assets/icons/Light1.svg"
      )
    );
    this.matIconRegistry.addSvgIcon(
      `temperature`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        "../assets/icons/Temperature.svg"
      )
    );
  }

  ngOnInit() {
    this.moduleService.getAll().subscribe(modules => (this.modules = modules));
  }
}
