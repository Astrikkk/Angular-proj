import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ITask } from '../ITask';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css'
})
export class CreateTaskComponent {

  @Output() createEvent = new EventEmitter<ITask>();

  createForm = this.fb.group({
    Name: ['', Validators.required],
    Date: [null],
    isCompleted: [false]
  });

  constructor(private fb: FormBuilder) {

  }

  onSubmit() {
    if (!this.createForm.valid) {
      alert("Invalid data!");
      return;
    }

    const task = this.createForm.value as ITask;
    console.log(task);

    this.createEvent.emit(task);
  }

  /*onSubmit() {
    if (!this.createForm.valid) {
      alert("Invalid data!");
      return;
    }
  
    const taskData = this.createForm.value;
    
    const name: string = taskData.Name || "";
  
    let formattedDate: Date | null = null;
    if (typeof taskData.Date === 'string') {
      const dateParts = taskData.Date.split('-');
      const formattedDateString = `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;
      formattedDate = new Date(formattedDateString);
    }
  
    const task: ITask = {
      id: this.generateId(),
      Name: name,
      Date: formattedDate,
      isCompleted: taskData.isCompleted || false
    };
  
    console.log(task);
  
    this.createEvent.emit(task);
  }
  

  generateId(): number {
    return new Date().getTime();
  }*/
}