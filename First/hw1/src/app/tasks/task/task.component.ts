import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITask } from '../ITask';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Output() deleteEvent = new EventEmitter<number>();

  @Input()
  task: ITask = {
    id: 0,
    Name: "",
    Date: null,
    isCompleted: false
  }

  onDelete() {
    this.deleteEvent.emit(this.task.id);
  }

  toggleCompleted() {
    this.task.isCompleted = !this.task.isCompleted;
  }

  getFormattedDate(date: any): string {
    if (!(date instanceof Date)) {
      return '';
    }
    return `${date.getDate()}:${date.getMonth() + 1}:${date.getFullYear()}`;
  }
}
