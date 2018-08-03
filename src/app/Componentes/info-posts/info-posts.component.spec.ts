import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPostsComponent } from './info-posts.component';

describe('InfoPostsComponent', () => {
  let component: InfoPostsComponent;
  let fixture: ComponentFixture<InfoPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
