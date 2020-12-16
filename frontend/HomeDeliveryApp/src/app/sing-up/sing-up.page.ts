import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { AlertController } from '@ionic/angular';

const CREATE_USER = gql`
mutation ($name: String, $surname1: String, $surname2: String, $tlfn: Int, $email: String, $password: String, $address: String){
  createUser(
    name: $name,
    surname1: $surname1,
    surname2: $surname2,
    tlfn: $tlfn,
    email: $email,
    password: $password,
    address: $address
   ){
    name surname1 surname2 tlfn email password address
   }
 }
  `;


@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.page.html',
  styleUrls: ['./sing-up.page.scss'],
})
export class SingUpPage implements OnInit {

  signUpForm: FormGroup;

  constructor(private apollo: Apollo,
    public fb: FormBuilder,
    private router: Router,
    public alertController: AlertController) {
    this.signUpForm = this.fb.group({
      name: new FormControl('', Validators.required),
      surname1: new FormControl('', Validators.required),
      surname2: new FormControl('', Validators.required),
      tlfn: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
  }

  onRegisterFormSubmit() {
    if (!this.signUpForm.valid) {
      return this.alertSubmit();
    } else {
      this.apollo.mutate({
        mutation: CREATE_USER,
        variables: {
          name: this.signUpForm.value.name,
          surname1: this.signUpForm.value.surname1,
          surname2: this.signUpForm.value.surname2,
          tlfn: this.signUpForm.value.tlfn.toString(),
          email: this.signUpForm.value.email,
          password: this.signUpForm.value.password,
          address: this.signUpForm.value.address
        }
      }).subscribe((res) => {
        this.signUpForm.reset();
        this.createAlert();
        this.router.navigateByUrl("/login");
      }), err => {
        this.presentAlert("Submit error");
      };
    }
  }

  async createAlert() {
    const alert = await this.alertController.create({
      header: 'Aviso',
      message: 'Usuario Creado',
      buttons: ['OK']
    });

    await alert.present();
  }

  async alertSubmit() {
    const alert = await this.alertController.create({
      header: 'Aviso',
      message: 'Debe introducir todos los datos',
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentAlert(errorMessage: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: errorMessage,
      buttons: ['OK']
    });

    await alert.present();
  }
}
