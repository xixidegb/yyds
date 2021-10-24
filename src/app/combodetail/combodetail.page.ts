import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-combodetail',
  templateUrl: './combodetail.page.html',
  styleUrls: ['./combodetail.page.scss'],
})
export class CombodetailPage implements OnInit {

  id: any
  url:any
  nutritions: any
  fat:any
  calories:any
  carbs :any
  protein:any
  ingredients:any
  title:any





  constructor(public api:ApiService, private activeRoutes: ActivatedRoute) { 
    this.id = this.activeRoutes.snapshot.paramMap.get('id');
    this.url = this.activeRoutes.snapshot.paramMap.get('url');
    this.title = this.activeRoutes.snapshot.paramMap.get('title');
    console.log(this.id);
    console.log(this.url);
    console.log(this.title);
  }


  ngOnInit() {
    this.ingre() 
    this.nutrition()
  }


  nutrition() {
    this.api.getNutrition(this.id).subscribe(result=>{
      console.log(result);
      this.calories = result['calories'];
      this.carbs = result['carbs'];
      this.protein = result['protein'];
      this.fat = result['fat'];

        //  this.id=result['meals'][0].id;
      });
    }

    ingre() {
      this.api.getIngre(this.id).subscribe(result=>{
        console.log(result);
        this.ingredients=result['ingredients'];
        
        //this.fat = result['fat'];
  
          //  this.id=result['meals'][0].id;
        });
      }



}
