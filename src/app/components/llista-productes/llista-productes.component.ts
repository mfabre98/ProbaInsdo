import { Component, OnInit } from '@angular/core';
import { productes } from '../data/productes';
import { Producte } from '../models/Producte';
import { ProducteComponent } from '../producte/producte.component';

@Component({
  selector: 'app-llista-productes',
  templateUrl: './llista-productes.component.html',
  styleUrls: ['./llista-productes.component.scss']
})
export class LlistaProductesComponent implements OnInit {

  llista : Producte[] = productes

  constructor() { }

  ngOnInit(): void {
  }

}
