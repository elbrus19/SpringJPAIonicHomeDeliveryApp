import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { AlertController } from '@ionic/angular';

const SEND_MAIL = gql`
query($to: String){
  sendMail{
    to: $to
  }
}
`;

@Component({
  selector: 'app-mail',
  templateUrl: './mail.page.html',
  styleUrls: ['./mail.page.scss'],
})
export class MailPage implements OnInit {

  // reportForm: FormGroup;

  constructor(){
  }

  ngOnInit() {
  }

  // onFormSubmit() {
  //   if (!this.mailForm.valid) {
  //     return this.alertSubmit();
  //   } else {
  //     this.createAlert().then(() => {
  //       this.apollo
  //         .watchQuery({
  //           query: SEND_MAIL,
  //           variables: {
  //             to: this.mailForm.value.mail
  //           }
  //         }).valueChanges.subscribe((result: any) => {
  //           console.log(result);
  //           this.router.navigateByUrl("/home");
  //         });
  //     })
  //   }
  // }

  // async createAlert() {
  //   const alert = await this.alertController.create({
  //     header: 'Aviso',
  //     message: 'Correo Enviado',
  //     buttons: ['OK']
  //   });

  //   await alert.present();
  // }

  // async alertSubmit() {
  //   const alert = await this.alertController.create({
  //     header: 'Aviso',
  //     message: 'Debe introducir todos los datos',
  //     buttons: ['OK']
  //   });

  //   await alert.present();
  // }

}
