import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendsFavoritesComponent } from './friends-favorites.component';

describe('FriendsFavoritesComponent', () => {
  let component: FriendsFavoritesComponent;
  let fixture: ComponentFixture<FriendsFavoritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendsFavoritesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendsFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
