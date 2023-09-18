import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from '../../../../animations';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  animations: [slideInAnimation]
})
export class MainLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
