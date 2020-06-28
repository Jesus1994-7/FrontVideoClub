import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastMoviesComponent } from './last-movies.component';

describe('LastMoviesComponent', () => {
  let component: LastMoviesComponent;
  let fixture: ComponentFixture<LastMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
