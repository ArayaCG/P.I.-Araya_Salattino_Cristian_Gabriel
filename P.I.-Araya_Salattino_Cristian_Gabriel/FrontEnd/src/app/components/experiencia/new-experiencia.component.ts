import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  nombreE: string = '';
  descripcionE: string = '';

  constructor(private sExperiencia: SExperienciaService, private router: Router) {
   }

  ngOnInit(): void {
  }

  onCreate(): void{
    const exp = new Experiencia(this.nombreE, this.descripcionE);
    this.sExperiencia.save(exp).subscribe(
      {
        next: data => {
        alert("Experiencia añadida");
        this.router.navigate(['']);
    }, 
      error: err =>{
      alert("Falló");
      this.router.navigate(['']);
    }
    });
  }


}
