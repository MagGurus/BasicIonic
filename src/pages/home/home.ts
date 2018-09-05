import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormInputPage } from '../form-input/form-input';
import { SelectListPage } from '../select-list/select-list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  todos: string[];
  periodeTerpilih: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // let define storage to hold our todo list data
    this.todos = [];
  }

  newTodo() {
    this.navCtrl.push(
      FormInputPage,
      {
        callback: (params) => {
          let newTodo = params;
          console.log("****", newTodo);
          this.todos.push(newTodo);
          return Promise.resolve();
        }
      }
    )
  }

  selectPeriode() {
    this.navCtrl.push(
      SelectListPage,
      {
        callback: (result) => {
          this.periodeTerpilih = result;
          return Promise.resolve();
        }
      }
    )
  }

}
