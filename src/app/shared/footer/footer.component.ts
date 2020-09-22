import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigurationService } from '../services/api';
import { Configuration } from '../models/configuration.model';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
    test : Date = new Date();


 Address: string;
 Facebook: string;
 Email: string;
 Telephone: string;
 Fax: string;
 LinkedIn: string;
 image: string;
 language: string;
 content: string;
 configuration: Configuration;
 myStyles={};
 ar:boolean;

    constructor(private router: Router ,
      private configurationServices: ConfigurationService ) {}

    ngOnInit() {
      this.language = localStorage.getItem('lang')
      if (this.language === 'ar') {
        this.ar= true;

        this.myStyles = {
          'font-family': 'Arabic',
          }  
  
      } else {
        this.ar= false;

        this.myStyles = {
          'font-family': 'NoirStd',
          }    
  
      }
  
      this.configurationServices.getAllConfigurationByLang(this.language).subscribe(res => {
        this.configuration = res;
        this.Address = this.configuration.data[0].value;
        this.Email =  this.configuration.data[3].value;;
        this.Telephone = this.configuration.data[4].value;
         this.Facebook =  this.configuration.data[1].value;
          this.LinkedIn =  this.configuration.data[6].value;
          this.content = this.configuration.data[7].value;


    }
    )

    }
    getPath(){
      return this.router.url;
    }
}
