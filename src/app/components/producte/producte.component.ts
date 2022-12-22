import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-producte',
  templateUrl: './producte.component.html',
  styleUrls: ['./producte.component.scss']
})
export class ProducteComponent {

  @Input() name = "";
  @Input() price = 0;
  @Input() description = "";
  public show = false;

  mostrarModal(nom: string, preu: number, descripcio: string){
    this.show = true;
    this.name = nom;
    this.price = preu;
    this.description = descripcio;
  }

  ocultarModal(){
    this.show = false;
  }


}
