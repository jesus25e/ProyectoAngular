import { Component } from "@angular/core"; 
@Component({
    selector: 'frutaComponent',
    template:`
    <h2>{{nombre_component}}</h2>
    <p>{{listado_frutas}}<p>
    `
})
export class FrutaComponent {
    public nombre_component='Componente fruta';
    public listado_frutas = 'Naranja,Platano,Mandarina';
}
