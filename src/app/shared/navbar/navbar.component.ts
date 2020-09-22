import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Location, PopStateEvent } from '@angular/common';
import { Configuration } from '../models/configuration.model';
import { ConfigurationService } from '../services/api';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    public isCollapsed = true;
    private lastPoppedUrl: string;
    private yScrollStack: number[] = [];

    sidebar: boolean = false;
    bar: boolean = true;
    //  configuration: Configuration;
    Address: string;
    Facebook: string;
    Logo: string;
    Email: string;
    Telephone: string;
    Fax: string;
    LinkedIn: string;
    image: string;
    language: string;
    right: boolean = false;
    ar:boolean;

    myStyles={};
    configuration: Configuration;
    constructor(public location: Location,
        private router: Router,
        private configurationServices: ConfigurationService) {
    }

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
             this.Logo = 'http://api.ezicodes.com/'+ this.configuration.data[2].value;
             this.Facebook =  this.configuration.data[1].value;
              this.LinkedIn =  this.configuration.data[6].value;
        }
        )
        this.router.events.subscribe((event) => {
            this.isCollapsed = true;
            if (event instanceof NavigationStart) {
                if (event.url != this.lastPoppedUrl)
                    this.yScrollStack.push(window.scrollY);
            } else if (event instanceof NavigationEnd) {
                if (event.url == this.lastPoppedUrl) {
                    this.lastPoppedUrl = undefined;
                    window.scrollTo(0, this.yScrollStack.pop());
                } else
                    window.scrollTo(0, 0);
            }
        });
        this.location.subscribe((ev: PopStateEvent) => {
            this.lastPoppedUrl = ev.url;
        });
    }


    open() {
        this.sidebar = true;
        this.bar = false;

    }
    close() {
        this.sidebar = false;
        this.bar = true;
    }



    Arb() {
        localStorage.clear();
        localStorage.setItem('dir', 'rtl');
        localStorage.setItem('lang', 'ar');
        this.right= true
        window.location.reload();

    }
    English() {
        localStorage.clear();
        localStorage.setItem('dir', 'ltr');
        localStorage.setItem('lang', 'en');
        this.right= false
        window.location.reload();


    }

}
