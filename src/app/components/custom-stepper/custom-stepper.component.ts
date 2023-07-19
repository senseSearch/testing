import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-custom-stepper',
  templateUrl: './custom-stepper.component.html',
  styleUrls: ['./custom-stepper.component.scss']
})
export class CustomStepperComponent implements OnInit {

  @Input() steps: string[];
  @Input() currentStep: number;
  @Output() stepChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
    this.currentStep = 0;
    this.steps = []
  }

  ngOnInit(): void {
  }

  previousStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
      this.stepChange.emit(this.currentStep);
    }
  }

  nextStep() {
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
      this.stepChange.emit(this.currentStep);
    }
  }

}
