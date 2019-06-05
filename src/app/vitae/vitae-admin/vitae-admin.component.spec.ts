import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VitaeAdminComponent } from './vitae-admin.component';

describe('VitaeAdminComponent', () => {
  let component: VitaeAdminComponent;
  let fixture: ComponentFixture<VitaeAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VitaeAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VitaeAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
