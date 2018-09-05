import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SelectListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-select-list',
  templateUrl: 'select-list.html',
})
export class SelectListPage {
  periode: string[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.periode = [
      'Bulan 1',
      'Bulan 2',
      'Bulan 3',
      'Bulan 4',
      'Bulan 5',
      'Bulan 6',
      'Bulan 7',
      'Bulan 8',
      'Bulan 9',
      'Bulan 10',
      'Bulan 11',
      'Bulan 12',
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectListPage');
  }

  select(periode) {
    let callback = this.navParams.get('callback');
    callback(periode).then(() => {
      this.navCtrl.pop();
    })
  }

  close() {
    this.navCtrl.pop();
  }
}
