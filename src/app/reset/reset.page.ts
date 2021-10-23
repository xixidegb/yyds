import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.page.html',
  styleUrls: ['./reset.page.scss'],
})
export class ResetPage implements OnInit {
  email: any;

  constructor(private auth: AngularFireAuth) { }

  ngOnInit() {
  }

  reset() {
    if (this.email) {
      this.auth.sendPasswordResetEmail(this.email).then((r) => {
        console.log("Email Reset");
      }).catch(e => {
        console.log(e)
      })
    }
  }

}
