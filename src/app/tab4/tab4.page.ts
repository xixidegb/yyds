import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { IonicAuthService } from '../ionic-auth.service';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})

export class Tab4Page implements OnInit{
  userDetail: string;
  currentDate;
  greet;

  constructor(
    private router: Router,
    private ionicAuthService: IonicAuthService
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
    this.ionicAuthService.userDetails().subscribe(response => {
      if (response !== null) {
        this.userDetail = response.email;
      } else {
        this.router.navigateByUrl('');
      }
    }, error => {
      console.log(error);
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
