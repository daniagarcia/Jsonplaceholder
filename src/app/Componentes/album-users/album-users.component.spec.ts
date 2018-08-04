import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumUsersComponent } from './album-users.component';

describe('AlbumUsersComponent', () => {
  let component: AlbumUsersComponent;
  let fixture: ComponentFixture<AlbumUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
