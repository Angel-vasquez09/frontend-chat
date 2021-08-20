import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatbuttomComponent } from './matbuttom.component';

describe('MatbuttomComponent', () => {
  let component: MatbuttomComponent;
  let fixture: ComponentFixture<MatbuttomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatbuttomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatbuttomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
