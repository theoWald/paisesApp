import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`
      li {
        cursor: pointer;
      }
  `]
})
export class PorPaisComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  paisesSugeridos : Country[] = [];
  mostrarSugerencias: boolean = false;

  constructor(private paisService: PaisService) { }

  buscar(termino: string){
    this.hayError = false;
    this.termino = termino;
    //console.log(this.termino);
    this.mostrarSugerencias = false;

    this.paisService.buscarPais(this.termino)
      .subscribe( (res) => {
        //console.log(res);
        this.paises = res;
      }, (err) => {
        this.paises = [];
        this.hayError = true;        
      });
  }


  sugerencias( termino: string ){
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;

    this.paisService.buscarPais( termino )
      .subscribe( 
          paises => this.paisesSugeridos = paises.splice(0,5),
          err => this.paisesSugeridos = []         
      );

  }

  buscarSugerido( termino: string ){
    this.buscar( termino );
  }
  

}
