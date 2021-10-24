import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class ApiService {

  constructor(public http: HttpClient) { }

  getFood(topic){
    //return this.http.get('https://api.edamam.com/api/food-database/v2/parser?app_id=42429cf5&app_key=a0caa2cf6da6155783859e5cb09588d4&ingr='+topic+'&nutrition-type=cooking');
    return this.http.get('https://api.spoonacular.com/recipes/findByIngredients?apiKey=8085ea68bc164081a140aad90acc4fdd&ingredients='+topic+'&number=5');
    //https://api.spoonacular.com/recipes/findByIngredients?apiKey=8085ea68bc164081a140aad90acc4fdd&ingredients=apple&number=5
    
  }


  getMeal(cal){
     return this.http.get('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate?rapidapi-key=42eaa26269mshf1c6ec903e82214p1e448bjsn61de0b58be57&&targetCalories='+cal+'&timeFrame=day');
   }


  getNutrition(id) {
      return this.http.get('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/'+id+'/nutritionWidget.json?rapidapi-key=42eaa26269mshf1c6ec903e82214p1e448bjsn61de0b58be57&');
    }


  getIngre(id){
    return this.http.get('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/'+id+'/ingredientWidget.json?rapidapi-key=42eaa26269mshf1c6ec903e82214p1e448bjsn61de0b58be57&')
  }
}
