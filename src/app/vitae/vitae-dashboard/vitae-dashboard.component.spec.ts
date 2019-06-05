import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VitaeDashboardComponent } from './vitae-dashboard.component';

describe('VitaeDashboardComponent', () => {
  let component: VitaeDashboardComponent;
  let fixture: ComponentFixture<VitaeDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VitaeDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VitaeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
