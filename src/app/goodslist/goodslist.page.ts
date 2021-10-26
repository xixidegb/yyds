import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/compat/database';


@Component({
  selector: 'app-goodslist',
  templateUrl: './goodslist.page.html',
  styleUrls: ['./goodslist.page.scss'],
})
export class GoodslistPage implements OnInit {

  sort:boolean = true;
  data:Array<any> = [];
  overdue:string = 'no';
  constructor(public route:ActivatedRoute,
    private navCtrl:NavController,
    private db: AngularFireDatabase
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if(params.type == undefined) {
        this.navCtrl.pop();
      }else {
        this.getlist(params.type)
      }
    });
  }

  getlist(type:number) {
    this.db.object('/product/'+localStorage['uid']).snapshotChanges().subscribe((res:any)=> {
      let list = {...res.payload.val() };
      for(let x in list) {
        if(type == 5) {
          let now = new Date();
          let day7 = new Date(list[x].preservation);
          let date = (now.getTime()-day7.getTime())/(1000*60*60*24);
          if(date < 0) {
            this.data.push(list[x]);
          }
        }
        if(type == 6) {
          let now = new Date();
          let day7 = new Date(list[x].preservation);
          let date = (now.getTime()-day7.getTime())/(1000*60*60*24);
          if(date >= 0) {
            this.data.push(list[x]);
          }
        }
        if(list[x].type == 'Fresh cold storage' && type == 1) {
          this.data.push(list[x]);
        }
        if(list[x].type == 'Snacks and drinks' && type == 2) {
          this.data.push(list[x]);
        }
        if(list[x].type == 'Fruits and vegetables' && type == 3) {
          this.data.push(list[x]);
        }
        if(list[x].type == 'others' && type == 4) {
          this.data.push(list[x]);
        }
      }
    })
  }

  getDate(date) {
    let now = new Date();
    let day7 = new Date(date);
    let minus = (now.getTime()-day7.getTime())/(1000*60*60*24);
    if(minus < 0) {
      return 'no';
    }else {
      return 'yes';
    }
  }

  handleSort() {
    this.sort = !this.sort;
    if(this.sort) {
      this.data.sort(this.sortAsc)
    }else {
      this.data.sort(this.sortDesc)
    }
  }

  sortAsc(obj1, obj2) {
    var val1 = new Date(obj1.preservation);
    var val2 = new Date(obj2.preservation);
    if (val1 < val2) {
        return -1;
    } else if (val1 > val2) {
        return 1;
    } else {
        return 0;
    }            
  }

  sortDesc(obj1, obj2) {
    var val1 = new Date(obj1.preservation);
    var val2 = new Date(obj2.preservation);
    if (val1 > val2) {
        return -1;
    } else if (val1 < val2) {
        return 1;
    } else {
        return 0;
    }            
  }
}
