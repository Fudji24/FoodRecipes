import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { APIRes, Recipes } from '../models/RecipeModel';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  
  constructor(private http: HttpClient) { }

  getRecipes(type:string, query?: string): Observable<APIRes<Recipes>>{
    
    let params =  new HttpParams();
    if(type){
      params = new HttpParams().set('type', type);
    }
    if(query){
      params = new HttpParams().set('type', type).set('query', query);
    }

    return this.http.get<APIRes<Recipes>>(`${env.BASE_URL}` + "complexSearch?random&number=10&" + `${env.apiKey}`, {
      params: params
    })
  }
  getRecipeDetails(id: number){
    return this.http.get<APIRes<Recipes>>(`${env.BASE_URL}` + id + "/information?"+ `${env.apiKey}`)
  }
}
