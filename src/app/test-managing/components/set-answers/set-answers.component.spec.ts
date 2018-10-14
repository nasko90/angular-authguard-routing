import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetAnswersComponent } from './set-answers.component';

describe('SetAnswersComponent', () => {
  let component: SetAnswersComponent;
  let fixture: ComponentFixture<SetAnswersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetAnswersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetAnswersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
