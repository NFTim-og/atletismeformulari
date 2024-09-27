import { Component } from '@angular/core';

@Component({
  selector: 'app-inscripcio',
  standalone: true,
  imports: [],
  templateUrl: './inscripcio.component.html',
  styleUrl: './inscripcio.component.css'
})

export class InscripcioComponent {

  dni: string = '';
  dniLetter: string = '';
  dniLetters = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

  calculateDNILetter() {
    if (this.dni && this.dni.length === 8) {
      const dniNumber = parseInt(this.dni, 10);
      const letterIndex = dniNumber % 23;
      this.dniLetter = this.dniLetters[letterIndex];
    } else {
      this.dniLetter = '';
    }
  }

  onDniChange(event: Event) {
    this.dni = (event.target as HTMLInputElement).value;
    this.calculateDNILetter();
  }

  selectedDistance: number = 0;

  races = [
    { name: '100m llisos', value: 100 },
    { name: '200m llisos', value: 200 },
    { name: '400m llisos', value: 400 },
    { name: '800m llisos', value: 800 },
    { name: '1000m llisos', value: 1000 }
  ];

  selectedRaces: number[] = [];

  onRaceSelection(event: any, raceValue: number) {
    if (event.target.checked) {
      this.selectedRaces.push(raceValue);
    } else {
      const index = this.selectedRaces.indexOf(raceValue);
      if (index > -1) {
        this.selectedRaces.splice(index, 1);
      }
    }
    this.selectedDistance = this.selectedRaces.reduce((a, b) => a + b, 0);
  }

  canSubmit(): boolean {
    return this.selectedDistance <= 1200 && this.dni.length === 8;
  }

}
