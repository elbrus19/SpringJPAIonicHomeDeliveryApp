import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { File } from '@ionic-native/File/ngx';
import { FileOpener } from '@ionic-native/File-opener/ngx';
import { FileTransfer } from '@ionic-native/File-transfer/ngx';
import { DocumentViewer } from '@ionic-native/Document-viewer/ngx';
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
    private fileTransfer: FileTransfer,
    private fileOpener: FileOpener,
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
      to: 'max@mustermann.de',
      cc: 'erika@mustermann.de',
      bcc: ['john@doe.com', 'jane@doe.com'],
      attachments: [
        'file://orders.pdf'
      ],
      subject: 'Example Send',
      body: 'How are you? Send email from Spain',
      isHtml: true
    };
    // Send a text message using default options
    this.emailComposer.open(email);
}


  openLocalPdf() {
    let filePath = this.file.applicationDirectory + "www/assets"

    if(this.platform.is('android')){
      let fakeName = Date.now();
      this.file.copyFile(filePath, 'prueba.pdf', this.file.dataDirectory, `${fakeName}.pdf`).then(result => {
        this.fileOpener.open(result.nativeURL, 'application/pdf');
      });
    }else{
      const options: DocumentViewerOptions = {
        title: 'My HomeDeliveryApp PDF'
      }
      this.documentViewer.viewDocument(`${filePath}/prueba.pdf`, 'application/pdf', options); 
    }
  }

  downloadAndOpenPdf() {
    let downloadUrl = "";
    let path = this.file.dataDirectory;
    const transfer = this.fileTransfer.create();

    transfer.download(downloadUrl, `${path}myFileHomeDeliveryApp.pdf`).then(entry => {
      let url = entry.toURL();
      if(this.platform.is('ios')){
        this.documentViewer.viewDocument(url, 'application/pdf', {}); 
      }else{
        this.fileOpener.open(url, 'application/pdf');
      }
    })
  }
}
