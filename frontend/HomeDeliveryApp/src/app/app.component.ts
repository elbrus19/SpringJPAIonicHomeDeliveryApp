import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { File } from '@ionic-native/file/ngx';
import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
import { DocumentViewerOptions } from '@ionic-native/document-viewer';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private file: File,
    private documentViewer: DocumentViewer,
    private emailComposer: EmailComposer,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  toggleTheme(event){
    if(event.detail.checked) {
      document.body.setAttribute('color-theme', 'dark');
    }else{
      document.body.setAttribute('color-theme', 'light');
    }
  }

  homeMenu() {
    this.router.navigateByUrl("/home");
  }

  listOrders() {
    this.router.navigateByUrl("/list-orders");
  }

  mapsPage() {
    this.router.navigateByUrl("/maps");
  }

  loginPage() {
    this.router.navigateByUrl("/login");
  }

  sendMail(){
    let email = {
      to: 'cristianelielbrunamendez@alumno.ieselrincon.es',
      cc: 'cristianelielbrunamendez@alumno.ieselrincon.es',
      bcc: ['cristianelielbrunamendez@alumno.ieselrincon.es', 'cristianelielbrunamendez@alumno.ieselrincon.es'],
      attachments: [
          'file:../../backend/homeDeliveryApp/reports/orders.pdf'
      ],
      subject: 'Example Send',
      body: 'Send to report',
      isHtml: true
    };
    // Send a text message using default options
    this.emailComposer.open(email);
}


  openLocalPdf() {
    let filePath = this.file.applicationDirectory + "www/backend/homeDeliveryApp/reports";
      const options: DocumentViewerOptions = {
        title: 'My HomeDeliveryApp PDF'
      }
      this.documentViewer.viewDocument(`${filePath}/orders.pdf`, 'application/pdf', options); 
    }
}
