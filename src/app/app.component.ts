import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TranslateService } from '@ngx-translate/core';
import { Config, Nav, Platform, IonicModule} from 'ionic-angular';
import { App } from 'ionic-angular';

 import { AlertController } from 'ionic-angular';
import { FirstRunPage } from '../pages';
import { Settings } from '../providers';
import { HardwareButtons } from '@scaffold-digital/ionic-hardware-buttons';
import { TabsPage } from '../pages/tabs/tabs';
import { TutorialPage } from '../pages/tutorial/tutorial';





 
@Component({
 templateUrl: 'app.component.html',
})
export class MyApp {
  rootPage = TutorialPage;
  //FirstRunPage
public alertShown:boolean = false;
  @ViewChild(Nav) nav: Nav;

  pages: any[] = [
    
    { title: 'Tutorial', component: 'TutorialPage' , image: 'assets/img/icon/tutorial.png',ios:"ios-bookmarks", md:"md-bookmarks"},

    { title: 'Quality', component: 'QualityPage', image: 'assets/img/icon/qq.png',ios:"ios-ribbon" ,md:"md-ribbon" },
    
    { title: 'Contact', component: 'ContactPage', image: 'assets/img/qaprofil/phone.png',ios:"ios-paper-plane",md:"md-paper-plane" },

    { title: 'Exit', component: 'TutorialPage' , image: 'assets/img/exit.png',ios:"ios-power", md:"md-power" }
       
  ]
  
  
    pages1: any[] = [
    { title: 'Exit', component: 'TutorialPage' , image: 'assets/img/exit.png' }
       
  ]
  
  
  
  

  constructor(private translate: TranslateService, public platform: Platform, settings: Settings, private config: Config, private statusBar: StatusBar, private splashScreen: SplashScreen, public alertCtrl: AlertController, public app: App, hardwareButtons: HardwareButtons) {
    platform.ready().then(() => {
    hardwareButtons.init();
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    this.initTranslate();
    
   
   
 platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      platform.registerBackButtonAction(() => {
        if (this.alertShown==false) {
          this.presentConfirm();  
        }
      }, 0)
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
  }
  

      
  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Confirm Exit',
      message: 'Do you want Exit?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
            this.alertShown=false;
          }
        },
        {
          text: 'Yes',
          handler: () => {
            console.log('Yes clicked');
            this.platform.exitApp();
          }
        }
      ]
    });
     alert.present().then(()=>{
      this.alertShown=true;
    });
 }
 
 
 

  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();

    if (browserLang) {
      if (browserLang === 'zh') {
        const browserCultureLang = this.translate.getBrowserCultureLang();

        if (browserCultureLang.match(/-CN|CHS|Hans/i)) {
          this.translate.use('zh-cmn-Hans');
        } else if (browserCultureLang.match(/-TW|CHT|Hant/i)) {
          this.translate.use('zh-cmn-Hant');
        }
      } else {
        this.translate.use(this.translate.getBrowserLang());
      }
    } else {
      this.translate.use('en'); // Set your language here
    }

    this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
      this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if(page.title== "Exit")
    this.presentConfirm();
    else
    this.nav.push(page.component);
  }
}
