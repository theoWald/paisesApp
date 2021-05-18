import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor( 
      private activatedRoute: ActivatedRoute,
      private paisService: PaisService
    ) { }

  ngOnInit(): void {

    //V2
    this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.paisService.getPaisPorCodigo(id)),
        tap( console.log )
      )
      .subscribe(pais => {
        //console.log(pais);
        this.pais = pais;
      });

    // V1
    // this.activatedRoute.params
    // (params.id) === ({id}) // Deconstruccion argumentos
    //   .subscribe( ({id}) => {
    //     console.log(id);

    //     this.paisService.getPaisPorCodigo(id)
    //       .subscribe( pais => {
    //         console.log(pais);
    //       })

    //   });

  }

}
