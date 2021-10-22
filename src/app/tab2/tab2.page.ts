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
    });
  }
}

