import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoriesDataComponent } from './accessories-data.component';

describe('AccessoriesDataComponent', () => {
  let component: AccessoriesDataComponent;
  let fixture: ComponentFixture<AccessoriesDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessoriesDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessoriesDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
