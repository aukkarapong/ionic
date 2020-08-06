import { Component } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { Page2 } from '../page2/page2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  Slides = [
    { title: "Panda the Cat 01",
      image: "assets/imgs/pandacat01.jpg"
    },
    { title: "Panda the Cat 02",
      image: "assets/imgs/pandacat02.jpg"
    },
    { title: "Panda the Cat 03",
      image: "assets/imgs/pandacat03.jpg"
    }
  ]
  constructor(public navCtrl: NavController) {
   
  }
  function01(){
    this.navCtrl.push(Page2)
  }

}
