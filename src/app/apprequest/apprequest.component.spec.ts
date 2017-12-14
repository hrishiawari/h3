import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprequestComponent } from './apprequest.component';

describe('ApprequestComponent', () => {
  let component: ApprequestComponent;
  let fixture: ComponentFixture<ApprequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
