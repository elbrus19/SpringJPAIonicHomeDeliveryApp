import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Apollo } from 'apollo-angular';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import gql from 'graphql-tag';

const MAIL = gql`
query ($to: String){
  sendMail (
    to: $to
    )
}
`;

const GENERATE_REPORT = gql`
query {
  exportReport
}
`;

@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})

export class ReportPage implements OnInit {
  mailForm: FormGroup;
  isSubmitted = false;

  constructor(private apollo: Apollo,
    public fb: FormBuilder,
    private router: Router,
    public alertController: AlertController) {
    this.mailForm = this.fb.group({
      mail: ['', Validators.compose([Validators.maxLength(70), Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'), Validators.required])]
    });
  }

  ngOnInit() {

  }

  onFormSubmit() {
    this.generateReport();
    if (!this.mailForm.valid) {
      this.isSubmitted = true;
      return false;
    } else {
      this.apollo
        .watchQuery({
          query: MAIL,
          variables: {
            to: this.mailForm.value.mail,
          },
        })
        .valueChanges.subscribe((result: any) => {
          this.mailAlert();
          this.router.navigateByUrl("/home");
        });
    }
  }

  async mailAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Aviso',
      message: 'Email enviado a ' + this.mailForm.value.mail,
      buttons: ['OK']
    });

    await alert.present();
  }

  generateReport() {
    this.apollo
      .watchQuery({
        query: GENERATE_REPORT
      })
      .valueChanges.subscribe((result: any) => {
        console.log(result);
      });
  }
}