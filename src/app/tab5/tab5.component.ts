import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';


@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.component.html',
  styleUrls: ['./tab5.component.scss'],
})
export class Tab5Component implements OnInit {
  count1 = 0;
  count2 = 0;
  constructor(private db: AngularFireDatabase,private router: Router) {
    
  }

  ngOnInit() {
    this.db.object('/product/'+localStorage['uid']).snapshotChanges().subscribe((res:any)=> {
      let list = {...res.payload.val() };
      this.count1 = 0;
      this.count2 = 0;
      for(let x in list) {
        let now = new Date();
        let day7 = new Date(list[x].preservation);
        let date = (now.getTime()-day7.getTime())/(1000*60*60*24);
        if(date > 0) {
          this.count2 += 1;
        }else {
          this.count1 += 1;
        }
      }
    })
  }

  goPages(num:number) {
    this.router.navigate(['/goodslist'],{queryParams:{'type':num}})
  }
}
