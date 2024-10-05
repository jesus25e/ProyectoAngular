import { Component } from "@angular/core";
@Component({
    selector:'app-informacion', //nombre del componente usado en el HTML
    template: './informacion.component.html', //ruta del archivo HTML
    styleUrls:['./informacion.component.css']
})
export class InformacionComponent{
    title: String="Este es un ejemplo de componente de angular";
    mostrarMensaje(){
        alert('Hola desde el component informacion');
    }
}