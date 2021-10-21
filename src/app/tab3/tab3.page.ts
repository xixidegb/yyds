import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  man= "block"
  woman= "none"
  elderly= "none"
  child = "none"
  color = "rgb(255,235,148)"
  constructor() {
  }


  showM() {
    this.man = "block";
    this.woman = "none";
    this.elderly= "none";
    this.child = "none";
    document.getElementById("mcolor").style.backgroundColor="rgb(255,235,148)";
    document.getElementById("wcolor").style.backgroundColor="rgb(255,235,148,0)";
    document.getElementById("ecolor").style.backgroundColor="rgb(255,235,148,0)";
    document.getElementById("ccolor").style.backgroundColor="rgb(255,235,148,0)";
  }

  showW() {
    this.woman = "block";
    this.man = "none";
    this.elderly= "none";
    this.child = "none";
    document.getElementById("wcolor").style.backgroundColor="rgb(255,235,148)";
    document.getElementById("mcolor").style.backgroundColor="rgb(255,235,148,0)";
    document.getElementById("ecolor").style.backgroundColor="rgb(255,235,148,0)";
    document.getElementById("ccolor").style.backgroundColor="rgb(255,235,148,0)";    
  }

  showE() {
    this.elderly= "block";
    this.woman = "none";
    this.man = "none";
    this.child = "none";
    document.getElementById("ecolor").style.backgroundColor="rgb(255,235,148)";
    document.getElementById("mcolor").style.backgroundColor="rgb(255,235,148,0)";
    document.getElementById("wcolor").style.backgroundColor="rgb(255,235,148,0)";
    document.getElementById("ccolor").style.backgroundColor="rgb(255,235,148,0)";
  }

  showC() {
    this.child = "block";
    this.man = "none";
    this.woman = "none";
    this.elderly= "none";
    document.getElementById("ccolor").style.backgroundColor="rgb(255,235,148)";
    document.getElementById("mcolor").style.backgroundColor="rgb(255,235,148,0)";
    document.getElementById("wcolor").style.backgroundColor="rgb(255,235,148,0)";
    document.getElementById("ecolor").style.backgroundColor="rgb(255,235,148,0)";


  }



}
