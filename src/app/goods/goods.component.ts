import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss'],
})
export class GoodsComponent implements OnInit {

  goodsForm: FormGroup;
  constructor(private navCtrl:NavController,
    private fb: FormBuilder,
    private db: AngularFireDatabase) {
    this.goodsForm = this.fb.group({
      type:[null,[Validators.required,]],
      name:[null,[Validators.required,]],
      number:[1],
      guarantee:[null,[Validators.required,]],
      preservation:[null,[Validators.required,]]
    });
  }

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.pop();
  }

  handleSave() {
    if(this.goodsForm.valid) {
      let id = Date.now();
      this.db.object('/product/'+localStorage['uid']+'/'+id).set({
          type: this.goodsForm.get('type').value,
          name: this.goodsForm.get('name').value,
          number: this.goodsForm.get('number').value,
          guarantee: this.dateFormat(this.goodsForm.get('preservation').value,'MM/DD/YYYY'),
          preservation: this.dateFormat(this.goodsForm.get('preservation').value,'MM/DD/YYYY'),
          createdAt: Date.now(),
      }).then(() => {
        this.navCtrl.pop();
      });
    }
  }

  minus() {
    if(Number(this.goodsForm.get('number').value) > 1) {
      this.goodsForm.patchValue({
        'number': Number(this.goodsForm.get('number').value) - 1
      })
    }
  }

  add() {
    this.goodsForm.patchValue({
      'number': Number(this.goodsForm.get('number').value) + 1
    })
  }

  dateFormat(date: any, sFormat: String = 'yyyy-MM-dd'): string {
    date = new Date(date);
    let time = {
      Year: 0,
      TYear: '0',
      Month: 0,
      TMonth: '0',
      Day: 0,
      TDay: '0',
      Hour: 0,
      THour: '0',
      hour: 0,
      Thour: '0',
      Minute: 0,
      TMinute: '0',
      Second: 0,
      TSecond: '0',
      Millisecond: 0
    };
    time.Year = date.getFullYear();
    time.TYear = String(time.Year).substr(2);
    time.Month = date.getMonth() + 1;
    time.TMonth = time.Month < 10 ? "0" + time.Month : String(time.Month);
    time.Day = date.getDate();
    time.TDay = time.Day < 10 ? "0" + time.Day : String(time.Day);
    time.Hour = date.getHours();
    time.THour = time.Hour < 10 ? "0" + time.Hour : String(time.Hour);
    time.hour = time.Hour < 13 ? time.Hour : time.Hour - 12;
    time.Thour = time.hour < 10 ? "0" + time.hour : String(time.hour);
    time.Minute = date.getMinutes();
    time.TMinute = time.Minute < 10 ? "0" + time.Minute : String(time.Minute);
    time.Second = date.getSeconds();
    time.TSecond = time.Second < 10 ? "0" + time.Second : String(time.Second);
    time.Millisecond = date.getMilliseconds();

    return sFormat.replace(/yyyy/ig, String(time.Year))
      .replace(/yyy/ig, String(time.Year))
      .replace(/yy/ig, time.TYear)
      .replace(/y/ig, time.TYear)
      .replace(/MM/g, time.TMonth)
      .replace(/M/g, String(time.Month))
      .replace(/dd/ig, time.TDay)
      .replace(/d/ig, String(time.Day))
      .replace(/HH/g, time.THour)
      .replace(/H/g, String(time.Hour))
      .replace(/hh/g, time.Thour)
      .replace(/h/g, String(time.hour))
      .replace(/mm/g, time.TMinute)
      .replace(/m/g, String(time.Minute))
      .replace(/ss/ig, time.TSecond)
      .replace(/s/ig, String(time.Second))
      .replace(/fff/ig, String(time.Millisecond))
  }

}
