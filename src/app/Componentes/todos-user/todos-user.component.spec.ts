import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosUserComponent } from './todos-user.component';

describe('TodosUserComponent', () => {
  let component: TodosUserComponent;
  let fixture: ComponentFixture<TodosUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodosUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
