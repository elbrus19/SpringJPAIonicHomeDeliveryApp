import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { File } from '@ionic-native/file/ngx';
import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
import { DocumentViewerOptions } from '@ionic-native/document-viewer';


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

  reportPage() {
    this.router.navigateByUrl("/report");
  }

  openLocalPdf() {
    let filePath = this.file.applicationDirectory + "www/backend/homeDeliveryApp/reports";
      const options: DocumentViewerOptions = {
        title: 'My HomeDeliveryApp PDF'
      }
      this.documentViewer.viewDocument(`${filePath}/orders.pdf`, 'application/pdf', options); 
    }
}
