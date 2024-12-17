import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleprofesorPage } from './detalle-profesor.page';

describe('DetalleProfesorPage', () => {
  let component: DetalleprofesorPage;
  let fixture: ComponentFixture<DetalleprofesorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleprofesorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
