import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolAppComponent } from './school-app.component';

describe('SchoolAppComponent', () => {
  let component: SchoolAppComponent;
  let fixture: ComponentFixture<SchoolAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
