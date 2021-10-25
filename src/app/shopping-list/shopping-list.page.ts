import { Component, OnInit } from '@angular/core';
import * as papa from "papaparse";
import{HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.page.html',
  styleUrls: ['./shopping-list.page.scss'],
})
export class ShoppingListPage implements OnInit {


  constructor(private http:HttpClient) { }


  option = {
    slidesPerView: 1.1,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
     autoplay:true,
  }





  ngOnInit() {
    
  }

  



}
