import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { TaskService } from "../../../core/services/task.service";
import { Task } from "../../../core/models/task";
import { Observable } from "rxjs";

@Component({
  selector: "app-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.scss"]
})
export class TasksComponent implements OnInit {
  tasks$: Observable<Task[]>;
  descriptionControl: FormControl;
  dateControl: FormControl;

  constructor(private taskService: TaskService) {}

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
