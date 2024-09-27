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

  // Method to calculate the DNI letter
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

}
