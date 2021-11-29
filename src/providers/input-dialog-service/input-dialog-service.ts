import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { GroceriesServiceProvider } from '../../providers/groceries-service/groceries-service';
import { Component } from '@angular/core';


/*
  Generated class for the InputDialogServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class InputDialogServiceProvider {

  constructor(public alertCtrl: AlertController, public dataService: GroceriesServiceProvider) {
    console.log('Hello InputDialogServiceProvider Provider');
  }

  showPrompt(item?, index?) {
    const prompt = this.alertCtrl.create({
      title: item ? "Edit Item" : "Add Item",
      message: item ? "Please edit item..." : "Please enter item...",
      inputs: [
        {
          name: 'name',
          placeholder: 'Name',
          value: item ? item.name : null
        },
        {
          name: 'quantity',
          type: 'number',
          min: 1,
          max: 10,
          placeholder: "Quantity",
          value: item ? item.quantity : null
        },
      ],
      buttons: [
        {
          text: "Cancel",
          handler: data => {
            console.log('Clicked Cancle');
          }
        },
        {
          text: "Update",
          handler: item => {
            console.log('Saved clicked', item);
            if (index !== undefined) {
              this.dataService.editItem(item, index);
            }
            else {
              this.dataService.addItem(item);
            }
          }
        }
      ]
    });
    prompt.present();
  }
}
