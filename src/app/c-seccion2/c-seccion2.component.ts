
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-c-seccion2',
  templateUrl: './c-seccion2.component.html',
  styleUrls: ['./c-seccion2.component.css']
})
export class CSeccion2Component implements OnInit {
ciudad: string='';
poblacion: string='';
formSec2 : FormGroup= new FormGroup({
  usuario:new FormControl("", Validators.required),
  comentario: new FormControl("", [Validators.required, Validators.minLength(10)])
})
  constructor(private route:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe ( (params) => {
      if (params['ciudad'] != null) {
        this.ciudad = params['ciudad']; 
      }
      if(params['poblacion']!= null){
        this.poblacion = params['poblacion'];
      }
    });
   
  }
  get f(){return this.formSec2.controls; }
  mostrarComentario(){
    console.log("El usuario "+this.f['usuario'].value+" a escrito "+this.f['comentario'].value);
  }

}