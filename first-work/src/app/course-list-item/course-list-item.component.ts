import { Component, Input, OnInit } from '@angular/core';
interface Person {
  name: string;
  code: number;
  ects: number;
}

const PersonArray:Person[]=[
  {
    name: 'Sjemon',
    code: 201610455,
    ects: 120,
  },
  {
    name: 'Shishki',
    code: 201615655,
    ects: 140,
  },
  {
    name: 'Kalenka',
    code: 201610225,
    ects: 90,
  }


]
@Component({
  selector: 'app-course-list-item',
  templateUrl: './course-list-item.component.html',
  styleUrls: ['./course-list-item.component.css']
})

export class CourseListItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() Course!: Person;
}