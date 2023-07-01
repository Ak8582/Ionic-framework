import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private actionSheetCtrl: ActionSheetController) {}
  public alertButtons = ['OK'];
  public pickerColumns = [
    {
      name: 'meat',
      options: [
        {
          text: 'Pepperoni',
          value: 'pepperoni',
        },
        {
          text: 'Smoked Ham',
          value: 'smoked-ham',
        },
        {
          text: 'Crispy Bacon',
          value: 'bacon',
        },
      ],
    },
    {
      name: 'veggies',
      options: [
        {
          text: 'Red onion',
          value: 'red-onion',
        },
        {
          text: 'Peppers',
          value: 'peppers',
        },
        {
          text: 'Black olives',
          value: 'black-olives',
        },
      ],
    },
    {
      name: 'crust',
      options: [
        {
          text: 'Pan style',
          value: 'pan',
        },
        {
          text: 'Hand tossed',
          value: 'hand-tossed',
        },
        {
          text: 'Stuffed crust',
          value: 'stuffed-crust',
        },
      ],
    },
  ];

  public pickerButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
    },
    {
      text: 'Confirm',
      handler: (value: {
        crust: { text: any };
        meat: { text: any };
        veggies: { text: any };
      }) => {
        window.alert(
          `You selected a ${value.crust.text} pizza with ${value.meat.text} and ${value.veggies.text}`
        );
      },
    },
  ];

  // isActionSheetOpen = false;
  // public actionSheetButtons = [
  //   {
  //     text: 'Delete',
  //     role: 'destructive',
  //     data: {
  //       action: 'delete',
  //     },
  //   },
  //   {
  //     text: 'Share',
  //     data: {
  //       action: 'share',
  //     },
  //   },
  //   {
  //     text: 'Cancel',
  //     role: 'cancel',
  //     data: {
  //       action: 'cancel',
  //     },
  //   },
  // ];

  // setOpen(isOpen: boolean) {
  //   this.isActionSheetOpen = isOpen;
  // }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Actions',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          data: {
            action: 'delete',
          },
        },
        {
          text: 'Share',
          data: {
            action: 'share',
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();
  }
}
