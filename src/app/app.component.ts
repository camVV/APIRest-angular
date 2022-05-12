import { Component, OnInit} from '@angular/core';
import { MonedasService } from './services/monedas.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //comando para instalar bootstrap en angular: ng add @ng-bootstrap/ng-bootstrap
  title = 'api-coins';
  filterTerm!: string;
  moneda: any;
  tablaNombres ={
    id:'Moneda',
    market_cap: 'Market_cap',
    current_price: 'Precio',
    last_updated: 'Ultima Actualización'

  }
  constructor(private monedaService:MonedasService){}

    ngOnInit(): void{
      this.getMonedas();//inicialisamos el metodo getTareas para cuando realize algun cambio se actualice automaticamente
     
    }
  
    getMonedas(){
      this.monedaService.getMonedas().subscribe(
        {
          next: resp => {
            this.moneda = resp;
            console.log(this.moneda);//imprimir resultado por consola
          },
          error: err => {
            console.log(err);
          }
        }      
      );
    }
  
}
