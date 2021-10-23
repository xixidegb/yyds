import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-man1',
  templateUrl: './man1.page.html',
  styleUrls: ['./man1.page.scss'],
})
export class Man1Page implements OnInit {

  public cal1= 1500
  public meals:any;
  public protein:any;
  public calories:any;
  public fat:any;
  public carbohydrates:any;
  public test:any;
  constructor(public api:ApiService) {}

  ngOnInit() {
    this.meal()
   // this.ingr()
  }

  meal(){
    this.api.getMeal(this.cal1).subscribe(result=>{
      console.log(result);
      this.meals=result['meals'];
      this.protein=result['nutrients'].protein;
      this.calories=result['nutrients'].calories;
      this.fat=result['nutrients'].fat;
      this.carbohydrates=result['nutrients'].carbohydrates;
      this.test = 'ttps://spoonacular.com/recipeImages/1095835-90x90.jpg';
    //  this.id=result['meals'][0].id;
  
    });
  }

  // ingr() {
  //   this.api.getIngr().subscribe(result=>{
  //     console.log(result)});
  //   }

}

