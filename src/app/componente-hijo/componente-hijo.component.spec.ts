import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteHijoComponent } from './componente-hijo.component';

describe('ComponenteHijoComponent', () => {
  let component: ComponenteHijoComponent;
  let fixture: ComponentFixture<ComponenteHijoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteHijoComponent]
    });
    fixture = TestBed.createComponent(ComponenteHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
