import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  searchTerm: string;
  foods = [
    {
      'name': 'apple',
      'price': 20
    },
    {
      'name': 'banana',
      'price': 15
    },
    {
      'name': 'peach',
      'price': 10
    }
  ];

  constructor() {}

}

