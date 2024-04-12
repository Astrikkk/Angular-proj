import { Component } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { ITask } from '../ITask';
import { TASKS } from '../task-mock';

@Component({
  selector: 'app-task-list',
  standalone: true,
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
  imports: [TaskComponent]
})
export class TaskListComponent {
  tasks: ITask[] = [...TASKS];

  clear() {
    this.tasks = [];

  }
  load() {
    this.tasks = [...TASKS];
  }

  deleteTask(id: number) {
    let index = this.tasks.findIndex(x => x.id == id);
    this.tasks.splice(index, 1);
  }

  SortByName() {
    this.tasks.sort((a, b) => {
      if (!a.Name && !b.Name) return 0;
      if (!a.Name) return 1;
      if (!b.Name) return -1;
      return a.Name.localeCompare(b.Name);
    });
  }

  SortByDate() {
    this.tasks.sort((a, b) => {
      if (a.Date && b.Date) {
        return a.Date.getTime() - b.Date.getTime();
      } else if (!a.Date) {
        return 1;
      } else {
        return -1;
      }
    });
  }
}
