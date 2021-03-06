import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { IonicAuthService } from '../ionic-auth.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  user: any = {
    'email':'1@2.com',
    'password':'111111'
  };
  userForm: FormGroup;
  successMsg: string = '';
  errorMsg: string = '';
  

  error_msg = {
    'email': [
      { 
        type: 'required', 
        message: 'Provide email.' 
      },
      { 
        type: 'pattern', 
        message: 'Email is not valid.' 
      }
    ],
    'password': [
      { 
        type: 'required', 
        message: 'Password is required.' 
      },
      { 
        type: 'minlength', 
        message: 'Password length should be 6 characters long.' 
      }
    ]
  };

  constructor(
    private router: Router,
    private ionicAuthService: IonicAuthService,
    private fb: FormBuilder,
    private navCtrl: NavController,
    private authObj: AngularFireAuth
  ) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(6),
        Validators.required
      ])),
    });
  }

  /*
  signIn(value) {
    this.ionicAuthService.signinUser(value)
      .then((response) => {
        console.log(response)
        this.errorMsg = "";
        //this.router.navigateByUrl('test');
        //this.router.navigate(['tabs']);
        this.navCtrl.navigateForward(['tabs/tabs/tab1']);
      }, error => {
        this.errorMsg = error.message;
        this.successMsg = "";
      })
  }
  */

 signIn() {

  if (this.user.email && this.user.password) {
    
    this.authObj.signInWithEmailAndPassword(this.user.email, this.user.password).then((res) => {
      localStorage.setItem('uid',res.user.uid);
      this.router.navigateByUrl('tabs/tabs/tab4');


    }).catch(e => {
      console.log(e);
    })
    
  }
}

  goToSignup() {
    this.router.navigateByUrl('register');
  }

}