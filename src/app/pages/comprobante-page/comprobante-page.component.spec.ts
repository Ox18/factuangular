import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprobantePageComponent } from './comprobante-page.component';

describe('ComprobantePageComponent', () => {
  let component: ComprobantePageComponent;
  let fixture: ComponentFixture<ComprobantePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComprobantePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprobantePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
