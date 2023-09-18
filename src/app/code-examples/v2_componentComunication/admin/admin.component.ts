import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})

export class AdminComponent implements OnInit {

  employees = [
    { name: 'bob', age: 45 },
    { name: 'angie', age: 33 },
    { name: 'thom', age: 37 },
    { name: 'binnie', age: 29 },
  ];

  employees$: Observable<any> = of(this.employees);

  constructor() { }

  ngOnInit(): void {
  }

}
