import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit{

  nombreE: string;
  descripcionE: string;
  expe: Experiencia [] = [];

  constructor(private sExperiencia: SExperienciaService, private router: Router){}

  ngOnInit(): void {
    this.cargarExperiencia();
  }

  onCreate(): void{
    const expe = new Experiencia(this.nombreE, this.descripcionE);
    this.sExperiencia.save(expe).subscribe(data=>{alert("Experiencia añadida")})
  }

  cargarExperiencia(): void{
    this.sExperiencia.lista().subscribe(data => {this.expe = data});

  }

  navigateToEdit(id: number): void {
    this.router.navigate(['/editexp', id]);
  }

  borrar(id?: number){
    if (id != undefined){
      this.sExperiencia.detele(id).subscribe(data => {alert("Experiencia borrada")})
    }

  }

}