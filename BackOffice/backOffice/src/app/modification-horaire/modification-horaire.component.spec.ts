import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificationHoraireComponent } from './modification-horaire.component';

describe('ModificationHoraireComponent', () => {
  let component: ModificationHoraireComponent;
  let fixture: ComponentFixture<ModificationHoraireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModificationHoraireComponent]
    });
    fixture = TestBed.createComponent(ModificationHoraireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
