import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsUsersComponent } from './tabs-users.component';

describe('TabsUsersComponent', () => {
  let component: TabsUsersComponent;
  let fixture: ComponentFixture<TabsUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabsUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
