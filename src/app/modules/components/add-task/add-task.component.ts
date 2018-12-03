import { Component, OnInit } from "@angular/core";
import { TaskService } from "../../../core/services/task.service";
import { FormControl, Validators } from "@angular/forms";
import { Task } from "../../../core/models/task";
import { Module } from "../../../core/models/module";
import { ModuleService } from "../../../core/services/module.service";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "app-add-task",
  templateUrl: "./add-task.component.html",
  styleUrls: ["./add-task.component.scss"]
})
export class AddTaskComponent implements OnInit {
  descriptionControl: FormControl;
  dateControl: FormControl;
  minDate = new Date();
  module: Module;
  private subscription: Subscription = null;

  constructor(
    private moduleService: ModuleService,
    private taskService: TaskService,
    private router: Router
  ) {}

  ngOnInit() {
    this.subscription = this.moduleService
      .getCuerrent()
      .subscribe(_module => (this.module = _module));

    this.descriptionControl = new FormControl("", [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(25)
    ]);
    this.dateControl = new FormControl("", [Validators.required]);
  }

  ngOnDestroy() {
    if (this.subscription !== null) {
      this.subscription.unsubscribe();
    }
  }

  save() {
    if (this.descriptionControl.invalid || this.dateControl.invalid) return;
    this.taskService
      .create(
        new Task(
          this.module,
          this.descriptionControl.value,
          this.dateControl.value
        )
      );
//      .subscribe();
    return this.router.navigate([this.module.id + "/tasks"]);
  }
}
