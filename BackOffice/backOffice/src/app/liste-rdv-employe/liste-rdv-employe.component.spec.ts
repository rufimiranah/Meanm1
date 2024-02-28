import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeRdvEmployeComponent } from './liste-rdv-employe.component';

describe('ListeRdvEmployeComponent', () => {
  let component: ListeRdvEmployeComponent;
  let fixture: ComponentFixture<ListeRdvEmployeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeRdvEmployeComponent]
    });
    fixture = TestBed.createComponent(ListeRdvEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
