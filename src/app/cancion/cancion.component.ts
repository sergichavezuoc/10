import { Component, OnInit } from '@angular/core';
import { Cancion } from "../cancion";
@Component({
  selector: 'app-cancion',
  templateUrl: './cancion.component.html',
  styleUrls: ['./cancion.component.css']
})
export class CancionComponent implements OnInit {
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
