import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '../shared/services/api';
import { Configuration } from '../shared/models';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
   content: string;
   image: string;
   language: string;
   configuration: Configuration;
   myStyles={};
   ar: boolean;
  constructor( private configurationServices: ConfigurationService) { }

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
  
      this.language = localStorage.getItem('lang')

      this.configurationServices.getAllConfigurationByLang(this.language).subscribe(res => {
        this.configuration = res;
        this.content = this.configuration.data[9].value;
         this.image = 'http://api.ezicodes.com/'+this.configuration.data[10].value;
  
  
    }
    )    }
  

}
