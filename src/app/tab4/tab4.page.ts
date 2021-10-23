
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
      this.greet = "Morning";
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




