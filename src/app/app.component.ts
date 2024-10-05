import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//importa paquetes de angular
@Component({
  //nombre
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  //Muestra
  templateUrl: './app.component.html',
  //toma estilo
  styleUrl: './app.component.css'
})
export class AppComponent {
  //export 
  title = 'Proyecto Angular - VI Ciclo - Ing. Informatica [UNJFSC]';
}
