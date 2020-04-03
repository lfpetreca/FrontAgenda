import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaFrontComponent } from './tela-front.component';

describe('TelaFrontComponent', () => {
  let component: TelaFrontComponent;
  let fixture: ComponentFixture<TelaFrontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaFrontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
