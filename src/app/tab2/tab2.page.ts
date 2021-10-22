import { Component } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public topic: any;
  public foodData:any;
  constructor(public api:ApiService) {}
  
  search(){
    this.api.getFood(this.topic).subscribe(result=>{
      console.log(result);
      this.foodData=result['hints'];
      var i;
      console.log(this.foodData[0])
      for (i in this.foodData) {
        // console.log(111)
        // console.log(this.foodData[i])
        // console.log(this.foodData[i].food.nutrients.CHOCDF)
        this.foodData[i].food.nutrients.CHOCDF = this.foodData[i].food.nutrients.CHOCDF.toFixed(2)
        this.foodData[i].food.nutrients.ENERC_KCAL = this.foodData[i].food.nutrients.ENERC_KCAL.toFixed(2)
        this.foodData[i].food.nutrients.FAT = this.foodData[i].food.nutrients.FAT.toFixed(2)
        this.foodData[i].food.nutrients.FIBTG = this.foodData[i].food.nutrients.FIBTG.toFixed(2)
        this.foodData[i].food.nutrients.PROCNT = this.foodData[i].food.nutrients.PROCNT.toFixed(2)
        // item['food']['nutrients']['CHOCDF'] = Number(item['food']['nutrients']['HOCDF']).toFixed(2)
        // item['food']['nutrients']['ENERC_KCAL'] = Number(item['food']['nutrients']['ENERC_KCAL']).toFixed(2)
        // item['food']['nutrients']['FAT'] = Number(item['food']['nutrients']['FAT']).toFixed(2)
        // item['food']['nutrients']['FIBTG'] = Number(item['food']['nutrients']['FIBTG']).toFixed(2)
        // item['food']['nutrients']['PROCNT'] = Number(item['food']['nutrients']['PROCNT']).toFixed(2)

        // item.food.nutrients.CHOCDF=0
        // item['food']['nutrients']['ENERC_KCAL'] = 0
        // item['food']['nutrients']['FAT'] = 0
        // item['food']['nutrients']['FIBTG'] = 0
        // item['food']['nutrients']['PROCNT'] = 0
      }
    });
  }
}



