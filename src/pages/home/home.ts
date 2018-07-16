import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
public count_bus1:number=0;
public count_rick:number=0;
public count_cart:number=0;
public count_horse:number=0;
public count_auto:number=0;
public count_bus2:number=0;
  constructor(public navCtrl: NavController,) {

  }
  // ionViewDidLoad(){
  //   this.storage.get("Count").then((data)=>{
  //     this.count_bus1=data;
  //   });
  // }
increment_bus1(){
  this.count_bus1+=1;
  // this.storage.set("Count",this.count_bus1);
}
decrement(){
  this.count_bus1--;
}

increment_rick(){
  this.count_rick+=1;
}
decrement_rick(){
  this.count_rick--;
}
increment_cart(){
  this.count_cart+=1;
}
decrement_cart(){
  this.count_cart--;
}
increment_horse(){
  this.count_horse+=1;
}
decrement_horse(){
  this.count_horse--;
}
increment_auto(){
  this.count_auto+=1;
}
decrement_auto(){
  this.count_auto--;
}
increment_bus2(){
  this.count_bus2+=1;
}
}
