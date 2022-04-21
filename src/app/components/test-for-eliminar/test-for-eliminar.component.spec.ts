import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestForELIMINARComponent } from './test-for-eliminar.component';

describe('TestForELIMINARComponent', () => {
  let component: TestForELIMINARComponent;
  let fixture: ComponentFixture<TestForELIMINARComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestForELIMINARComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestForELIMINARComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
