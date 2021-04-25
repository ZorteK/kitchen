import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Recipe} from './recette/Recipe';
import {Stock} from './recette/Stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  private apiUrl = 'api/stocks';

  constructor(private http: HttpClient ) { }

  getStocks(): Observable<Stock[]> {
    const url = `http://192.168.1.76:9001/${this.apiUrl}`;
    return this.http.get<Stock[]>(url);
  }
}
