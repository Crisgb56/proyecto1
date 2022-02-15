import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
personaData: any = {nombre:"Maria", apellido:"De la O", edad:27}

  constructor() { }
  eventoBotonAngular(){
    console.log('Ejecutamos el evento del boton para '+this.personaData.nombre+' '+this.personaData.apellido);
  }

  ngOnInit(): void {

  }

}
