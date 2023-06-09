import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercaDeComponent implements OnInit{

  Persona: Persona = new Persona("","");

  constructor (public personaService: PersonaService){
  }

  ngOnInit (): void {
    this.personaService.getPersona().subscribe (data => {this.Persona = data})
    
  }

}
