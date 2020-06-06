import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RooftopComponent } from './rooftop.component';

describe('RooftopComponent', () => {
  let component: RooftopComponent;
  let fixture: ComponentFixture<RooftopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RooftopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RooftopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
