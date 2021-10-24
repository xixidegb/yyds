import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-elderly2',
  templateUrl: './elderly2.page.html',
  styleUrls: ['./elderly2.page.scss'],
})
export class Elderly2Page implements OnInit {

  public cal1= 1800
  public meals:any;
  public protein:any;
  public calories:any;
  public fat:any;
  public carbohydrates:any;
  public test:any;
  public title:any;

  constructor(public api:ApiService, private router:Router) {}

  ngOnInit() {
    this.meal()
   // this.ingr()
  }

  meal(){
    this.api.getMeal(this.cal1).subscribe(result=>{
      console.log(result);
      this.meals=result['meals'];
      this.protein=parseInt(result['nutrients'].protein);
      this.calories=parseInt(result['nutrients'].calories);
      this.fat=parseInt(result['nutrients'].fat);
      this.carbohydrates=parseInt(result['nutrients'].carbohydrates);
      this.test = 'ttps://spoonacular.com/recipeImages/1095835-90x90.jpg';
    //  this.id=result['meals'][0].id;
  
    });
  }

  // ingr() {
  //   this.api.getIngr().subscribe(result=>{
  //     console.log(result)});
  //   }

  detail(id,url,title) {
    //console.log(title);
    this.router.navigate(['/combodetail',{id,url,title}]);
  }

}


