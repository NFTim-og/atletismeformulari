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

  it('should correctly add races and calculate total distance', () => {
    const mockEvent = { target: { checked: true } };
  
    component.onRaceSelection(mockEvent, 100);
    expect(component.selectedRaces).toContain(100);
    expect(component.selectedDistance).toBe(100);
  
    component.onRaceSelection(mockEvent, 400);
    expect(component.selectedRaces).toContain(400);
    expect(component.selectedDistance).toBe(500);
  });

  it('should disable form submission if total distance exceeds 1200m', () => {
    const mockEvent = { target: { checked: true } };
  
    component.onRaceSelection(mockEvent, 1000);
    component.onRaceSelection(mockEvent, 400);
  
    expect(component.selectedDistance).toBe(1400);
    expect(component.canSubmit()).toBeFalse();
  });

  it('should enable form submission only when total distance is valid and DNI is complete', () => {
    component.dni = '12345678';
    component.calculateDNILetter();
  
    const mockEvent = { target: { checked: true } };
    component.onRaceSelection(mockEvent, 100);
    component.onRaceSelection(mockEvent, 200);
  
    expect(component.canSubmit()).toBeTrue();
  });
  
});
