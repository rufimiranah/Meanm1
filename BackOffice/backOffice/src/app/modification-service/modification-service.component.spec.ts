import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificationServiceComponent } from './modification-service.component';

describe('ModificationServiceComponent', () => {
  let component: ModificationServiceComponent;
  let fixture: ComponentFixture<ModificationServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModificationServiceComponent]
    });
    fixture = TestBed.createComponent(ModificationServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
