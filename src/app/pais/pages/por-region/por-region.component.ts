import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  buscar(termino: string){
    this.hayError = false;
    this.termino = termino;
    //console.log(this.termino);

    this.paisService.buscarRegion(this.termino)
      .subscribe( (res) => {
        console.log(res);
        this.paises = res;
      }, (err) => {
        this.paises = [];
        this.hayError = true;        
      });
  }

}
