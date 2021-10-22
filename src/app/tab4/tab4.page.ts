
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
  

  user: any = {};
  constructor(
    private router: Router,
    private ionicAuthService: IonicAuthService,
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth
  ) {
    this.currentDate = new Date();
    if (this.currentDate.getHours() < 12){
      this.greet="Morning";
    } else if(this.currentDate.getHours() > 12 && this.currentDate.getHours() < 18){
      this.greet="Afternoon";
    } else {
      this.greet="Evening";
    }

    
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

    // BMR（男）=（13.7×体重（kg））+（5.0×身高（cm））-（6.8×年龄）+66
    // BMR（女）=（9.6×体重（kg））+（1.8×身高（cm））-（4.7×年龄）+655

    var cal
    if (gender=='male') {
      cal = 13.7 * weight + 5 * height - 6.8 * age + 66
    } else {
      cal = 9.6 * weight + 1.8 * height - 4.7 * age + 655
    }
    this.user['cal'] = cal
  })
  }




  signOut() {
    this.ionicAuthService.signoutUser()
      .then(res => {
        this.router.navigateByUrl('login');
      })
      .catch(error => {
        console.log(error);
      })
  }
}




