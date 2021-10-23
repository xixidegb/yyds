import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage'
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { getAuth } from "firebase/auth";
import { Router } from "@angular/router";
import { IonicAuthService } from '../ionic-auth.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {

  user: any = {};
  getAuth = getAuth();
  uid = this.getAuth.currentUser.uid

  
  constructor(
    private auth: AngularFireAuth,
    private afStorage: AngularFireStorage,
    private afDB: AngularFireDatabase,
    private router: Router,
    private ionicAuthService: IonicAuthService
  ) { }

  ngOnInit() {
    this.afDB.object('users/' + this.uid).snapshotChanges().subscribe((usersnap: any) => {
      this.user = { 'key': usersnap.key, ...usersnap.payload.val() };
  })
  }


  update() {
    this.afDB.object('users/' + this.uid).update(this.user);
    this.router.navigateByUrl('tabs/tabs/tab1');
  }

  signOut() {
    this.ionicAuthService.signoutUser()
      .then(res => {
        this.router.navigateByUrl('welcome');
      })
      .catch(error => {
        console.log(error);
      })
  }
}
