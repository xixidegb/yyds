import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }

  getFood(topic){
    return this.http.get('https://api.edamam.com/api/food-database/v2/parser?app_id=42429cf5&app_key=a0caa2cf6da6155783859e5cb09588d4&ingr='+topic+'&nutrition-type=cooking');

  }
}
