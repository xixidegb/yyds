import { Component, OnInit } from '@angular/core';
import * as papa from "papaparse";
import{HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.page.html',
  styleUrls: ['./shopping-list.page.scss'],
})
export class ShoppingListPage implements OnInit {
  records:any[]=[];

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.loadDataFromCsvFile();
  }

  loadDataFromCsvFile() 
  {
    this.http.get('/assets/food.csv',
    {responseType:"text"}).subscribe((datatemp)=>{
      let obj = papa.parse(datatemp);
      let arr = obj.data;
      arr.splice(0,1);
      this.records = arr;
    })

  }

}
