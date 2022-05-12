import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';//http client sirve para comunicarse con un servidor a traves de http

@Injectable({
  providedIn: 'root'
})
export class MonedasService {
  API_URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1';
  constructor(private http: HttpClient) {
    console.log("servicio Moneda");
   }
   getMonedas(){
    return this.http.get(`${this.API_URL}`);
   }
}
