import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-neweducacion',
  templateUrl: './Neweducacion.component.html',
  styleUrls: ['./Neweducacion.component.css']
})
export class NeweducacionComponent implements OnInit {
  nombreE: string = '';
  descripcionE: string = '';

  constructor(private educasionService: EducacionService, private router: Router) { }

  ngOnInit(): void {
  }
  

  onCreate(): void{
    const educacion = new Educacion(this.nombreE, this.descripcionE);
    this.educasionService.save(educacion).subscribe(
      {
        next: data => {
        alert("Educación añadida");
        this.router.navigate(['']);
    }, 
      error: err =>{
      alert("Falló");
      this.router.navigate(['']);
    }
    });
  }
}
