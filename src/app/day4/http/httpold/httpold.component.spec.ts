import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpoldComponent } from './httpold.component';

describe('HttpoldComponent', () => {
  let component: HttpoldComponent;
  let fixture: ComponentFixture<HttpoldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpoldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
