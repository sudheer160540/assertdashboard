import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumablesDataComponent } from './consumables-data.component';

describe('ConsumablesDataComponent', () => {
  let component: ConsumablesDataComponent;
  let fixture: ComponentFixture<ConsumablesDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumablesDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumablesDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
