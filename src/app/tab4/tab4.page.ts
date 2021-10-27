
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { IonicAuthService } from '../ionic-auth.service';
import { AngularFireStorage } from '@angular/fire/compat/storage'
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';

import { getAuth } from "firebase/auth";

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})

export class Tab4Page implements OnInit{
  userDetail: string;
  ref: any;
  currentDate;
  greet;
  auth = getAuth();
  uid = this.auth.currentUser.uid
  profile :any;
  expiresData:any = [];
  

  user: any = {};
  constructor(
    private router: Router,
    private ionicAuthService: IonicAuthService,
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth
  ) {
    this.currentDate = new Date();
    if (this.currentDate.getHours() < 12){
      this.greet = "Morning";
    } else if(this.currentDate.getHours() > 12 && this.currentDate.getHours() < 18){
      this.greet="Afternoon";
    } else {
      this.greet="Evening";
    }

  }


  option = {
    slidesPerView: 1.1,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
     autoplay:true,
  }


  
  ngOnInit() {
    /*
    this.ionicAuthService.userDetails().subscribe(response => {
      if (response !== null) {
        this.userDetail = response.email;
      } else {
        this.router.navigateByUrl('');
      }
    }, error => {
      console.log(error);
    })
    */

   this.db.object('users/' + this.uid).snapshotChanges().subscribe((usersnap: any) => {
    this.user = { 'key': usersnap.key, ...usersnap.payload.val() };
    var height = this.user.height
    var weight = this.user.weight
    var gender = this.user.gender
    var age = this.user.age

    if (gender == 'Male'&& age <25) {
      this.profile = "assets/boy.svg";
    } else if (gender == 'Male'&& age >=25) {
      this.profile = "assets/man.svg";
    } else if (gender == 'Female'&& age >=25) {
      this.profile = "assets/woman.svg";
    } else if (gender == 'Female'&& age <25) {
      this.profile = "assets/girl.svg";
    } else {
      this.profile = "assets/man.svg";
    }

    // BMR（男）=（13.7×体重（kg））+（5.0×身高（cm））-（6.8×年龄）+66
    // BMR（女）=（9.6×体重（kg））+（1.8×身高（cm））-（4.7×年龄）+655

    var cal
    if (gender=='Male') {
      cal = (13.7 * weight + 5 * height - 6.8 * age + 66)*1.3
    } else {
      cal = (9.6 * weight + 1.8 * height - 4.7 * age + 655)*1.3
    }
    this.user['cal'] = parseInt(cal)
    })

    this.expiresData = [];
    this.db.object('/product/'+ this.uid).snapshotChanges().subscribe((item:any) => {
      let temp = {...item.payload.val() };
      let list:Array<any> = [];
      for(let x in temp) {
        list.push(temp[x]);
      }
      list.sort(this.sortAsc)
      for(let x in list) {
        let now = new Date();
        let day7 = new Date(list[x].preservation);
        let date = (day7.getTime() - now.getTime())/(1000*60*60*24);
        if(date > 0 && date <=7) {
          list[x]['expDay'] = Math.floor(date);
          if(this.expiresData.length < 3) {
            this.expiresData.push(list[x]);
          }
        }
      }
    })
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
}
