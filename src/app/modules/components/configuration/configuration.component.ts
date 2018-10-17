import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ModuleService } from '../../../core/services/module.service';
import { Module } from '../../../core/models/module';
import { MatSnackBar } from '@angular/material';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}import { Subscription } from 'rxjs';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit, OnDestroy {

  nameControl: FormControl;
  luxControl: FormControl;

  matcher = new MyErrorStateMatcher();
  module: Module;
  private subscription: Subscription = null;

  constructor(private moduleService: ModuleService) {  }

  ngOnInit() {
    this.subscription = this.moduleService.getCuerrent().subscribe(
      module => (this.module = module)
    );
    this.nameControl = new FormControl(this.module.name, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(15),
    ]);
    this.luxControl = new FormControl(this.module.configs.light, [
      Validators.required,
      Validators.pattern('[0-9]*'),
      Validators.min(10000),
      Validators.max(100000),
    ]);
  }

  ngOnDestroy() {
    if (this.subscription !== null) {
      this.subscription.unsubscribe();
    }
  }

  save(){
    if(this.nameControl.invalid || this.luxControl.invalid) return;
    this.module.name = this.nameControl.value;
    this.moduleService.update(this.module).subscribe();
  }
}
