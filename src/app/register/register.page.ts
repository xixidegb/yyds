import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  user: any = {};
  userForm: FormGroup;
  successMsg: string = '';
  errorMsg: string = '';

  form = [
    { name: 'I agree with the conditions and terms', value: 'privacy policy', checked: true }
  ];
  

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
    private auth: AngularFireAuth,
    private router: Router,
    private afDB: AngularFireDatabase,
    private fb: FormBuilder,

  ) { }


   public checkCheckbox(c: AbstractControl){
    if(c.get('termsAndConditions').value == false){
      return false;
    }else return true;}

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
      terms: [null, Validators.required] 
    });
  }


 

  register() {

    if (this.user.email && this.user.password) {
      this.auth.createUserWithEmailAndPassword(this.user.email, this.user.password).then((r) => {
        console.log(r);

        this.afDB.object('users/' + r.user.uid).set({
          name: this.user.name,
          email: this.user.email,
          gender: this.user.gender,
          age: this.user.age,
          weight: this.user.weight,
          height: this.user.height,
          createdAt: Date.now(),
        }).then(() => {
          this.router.navigateByUrl('/login');
        });

      }).catch(e => {
        console.log(e);
      })
    }

  }

  goToLogin() {
    this.router.navigateByUrl('login');
  }

}
