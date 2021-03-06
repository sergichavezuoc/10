import { Component, OnInit } from '@angular/core';
import { Cancion } from "../cancion";
import { CANCIONES } from "../mock-canciones";
@Component({
  selector: 'app-cancion',
  templateUrl: './cancion.component.html',
  styleUrls: ['./cancion.component.css']
})
export class CancionComponent implements OnInit {
  canciones = CANCIONES;
  selectedCancion!: Cancion;
  onSelect(cancion: Cancion): void {
    this.selectedCancion = cancion;
  }
  cancion: Cancion = {
    id: 1,
    autor: "Los Ronaldos",
    titulo: "Idiota",
    album: "Primer Album",
    anyo: 2005,
    genero: "Pop"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
