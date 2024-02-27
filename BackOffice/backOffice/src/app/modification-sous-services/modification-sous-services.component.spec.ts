import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificationSousServicesComponent } from './modification-sous-services.component';

describe('ModificationSousServicesComponent', () => {
  let component: ModificationSousServicesComponent;
  let fixture: ComponentFixture<ModificationSousServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModificationSousServicesComponent]
    });
    fixture = TestBed.createComponent(ModificationSousServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
