import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Recipe} from './recette/Recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private apiUrl = 'api/recipes';

  constructor(private http: HttpClient ) { }

  randomRecipe(): Observable<Recipe> {
    const url = `http://192.168.1.76:8080/${this.apiUrl}/random`;
    return this.http.get<Recipe>(url);
  }
}
