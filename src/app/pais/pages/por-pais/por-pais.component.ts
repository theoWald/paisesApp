import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  buscar(termino: string){
    this.hayError = false;
    this.termino = termino;
    //console.log(this.termino);

    this.paisService.buscarPais(this.termino)
      .subscribe( (res) => {
        console.log(res);
        this.paises = res;
      }, (err) => {
        this.paises = [];
        this.hayError = true;        
      });
  }


  sugerencias( termino: string ){
    this.hayError = false;
    //TODO: CREAR SUGERENCIAS
  }

  

}
