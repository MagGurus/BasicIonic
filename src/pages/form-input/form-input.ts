import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FormInputPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-form-input',
  templateUrl: 'form-input.html',
})
export class FormInputPage {

  todo = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormInputPage');
  }

  save(todo) {
    let callback = this.navParams.get('callback');
    callback(todo).then(() => {
      this.navCtrl.pop();
    })
  }
}
