import { Component } from "@angular/core";
@Component({
    selector: 'app-colaborador',
    templateUrl: './colaborador.component.html',
    styleUrls: ['./colaborador.component.css']
})
export class ColaboradorComponent{
    colaborador = {
        nombre: 'Julio Cesar',
        edad: 30,
        direccion:'Calle Miraflores N° 2720',
        telefono:'994256320',
        email: 'juliocesar@gmail.com'
    };
}
