import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntregasAdminComponent } from './entregas-admin.component';

describe('EntregasAdminComponent', () => {
  let component: EntregasAdminComponent;
  let fixture: ComponentFixture<EntregasAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntregasAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntregasAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
