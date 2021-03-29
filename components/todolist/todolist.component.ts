import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  tasks: string[] = [];
  task!: string;

  constructor() { }

  ngOnInit() { }

  addTask() {
    this.tasks.push(this.task);
  }

  deleteTask(taskIndex: number) {
    this.tasks.splice(taskIndex,1);
  }
  
}
