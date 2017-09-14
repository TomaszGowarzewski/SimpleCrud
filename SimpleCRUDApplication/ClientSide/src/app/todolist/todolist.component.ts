import { Component, ViewChild } from '@angular/core';
import { TdDynamicFormsComponent } from '@covalent/dynamic-forms'

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {

  model = new Todo("", "Do Zrobienia", "");
  @ViewChild('Title') _myform: TdDynamicFormsComponent;

  records = [new Todo("zadanie", "Do Zrobienia", "opis")]

  Add() {
    var item = new Todo(this._myform.value["Zadanie"], "false", this._myform.value["Opis"]);
    this.records.push(item);
  }

  Remove(zadanie: Todo) {
    console.log(zadanie);
    const index: number = this.records.indexOf(zadanie);
    if (index !== -1) {
      this.records.splice(index, 1);
    }
  }

  states = [{ "State": "Zrobione" }, { "State": "Do Zrobienia" }]

  textElements = [{
    "name": "Zadanie",
    "type": "input",
    "required": true
  },
  {
    "name": "Opis",
    "type": "textarea",
    "required": true
  }]
}

export class Todo {
  constructor(
    public Zadanie: string,
    public Status: string,
    public Opis: string
  ) {
  }
}

