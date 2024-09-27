import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscripcioComponent } from './inscripcio.component';

describe('InscripcioComponent', () => {
  let component: InscripcioComponent;
  let fixture: ComponentFixture<InscripcioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InscripcioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscripcioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate DNI letter correctly', () => {
    const component = new InscripcioComponent();
    component.dni = '12345678';
    component.calculateDNILetter();
    expect(component.dniLetter).toBe('Z');
  });
  
});
