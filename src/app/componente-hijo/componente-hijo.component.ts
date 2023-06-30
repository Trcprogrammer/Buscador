import { Component, Input } from '@angular/core';
import { datos } from '../models/datos';

@Component({
  selector: 'app-componente-hijo',
  templateUrl: './componente-hijo.component.html',
  styleUrls: ['./componente-hijo.component.css']
})
export class ComponenteHijoComponent {

  datos:datos[]=[
    {nombre:'Tracy',apellido:'Silverio',trabajos:'Programdor'},
    {nombre:'Amalia',apellido:'Tejada',trabajos:'Enfermera'},
    {nombre:'javier',apellido:'Pena',trabajos:'Gamer'},
    {nombre:'Maria',apellido:'Chacon',trabajos:'Cibernetica'},
    {nombre:'Roberto',apellido:'Chacon',trabajos:'Programador'},

    {nombre:'Rachel',apellido:'Medina',trabajos:'Cibernetica'},

    {nombre:'Yodany',apellido:'Silverio',trabajos:'Programador'},


  ]

   @Input()  eleccion:string="";

  
  
  

}
