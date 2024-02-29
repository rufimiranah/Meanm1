import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestationVisiteComponent } from './prestation-visite.component';

describe('PrestationVisiteComponent', () => {
  let component: PrestationVisiteComponent;
  let fixture: ComponentFixture<PrestationVisiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrestationVisiteComponent]
    });
    fixture = TestBed.createComponent(PrestationVisiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
