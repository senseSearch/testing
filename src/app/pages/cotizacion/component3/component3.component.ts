import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.scss']
})
export class Component3Component implements OnInit {

  constructor(private router: Router) { }

  navegarA(paso: number) {
    this.router.navigate([`/paso-${paso}`])
  }
  ngOnInit(): void {
  }

}
