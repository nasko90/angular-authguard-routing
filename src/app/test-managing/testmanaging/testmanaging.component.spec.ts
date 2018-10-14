import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestmanagingComponent } from './testmanaging.component';

describe('TestmanagingComponent', () => {
  let component: TestmanagingComponent;
  let fixture: ComponentFixture<TestmanagingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestmanagingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestmanagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
