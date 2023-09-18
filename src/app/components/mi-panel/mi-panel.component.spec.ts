import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiPanelComponent } from './mi-panel.component';

describe('MiPanelComponent', () => {
  let component: MiPanelComponent;
  let fixture: ComponentFixture<MiPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
