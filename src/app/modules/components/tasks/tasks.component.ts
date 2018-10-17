import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  OnDestroy
} from "@angular/core";
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators
} from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";
import { ModuleService } from "../../../core/services/module.service";
import { TaskService } from "../../../core/services/task.service";
import { Module } from "../../../core/models/module";
import { Task } from "../../../core/models/task";
import { MatSnackBar } from "@angular/material";
import { Subscription } from "rxjs";
import { Observable } from "rxjs";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Router } from "@angular/router";

@Component({
  selector: "app-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.scss"]
})
export class TasksComponent implements OnInit {
  tasks$: Observable<Task[]>;
  descriptionControl: FormControl;
  dateControl: FormControl;

  constructor(
    private taskService: TaskService
  ) {
  }

  ngOnInit() {
    this.tasks$ = this.taskService.tasks$;

    this.descriptionControl = new FormControl("", [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(15)
    ]);
    this.dateControl = new FormControl("", [Validators.required]);
  }

  finishTask(task: Task) {
    task.status = "F";
    this.taskService.update(task).subscribe();
  }
}
