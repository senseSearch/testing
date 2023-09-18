import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  @Input('employs') employs$!: Observable<Employee[]>;

  constructor() { }

  ngOnInit(): void {

  }

}
