import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage'
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { getAuth } from "firebase/auth";
import { Router } from "@angular/router";

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  user: any = {};
  getAuth = getAuth();
  uid = this.getAuth.currentUser.uid

  constructor(private auth: AngularFireAuth,
    private afStorage: AngularFireStorage,
    private afDB: AngularFireDatabase,
    private router: Router
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

}
