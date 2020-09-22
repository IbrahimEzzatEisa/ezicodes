import { Component, OnInit } from '@angular/core';
import { Message, Configuration } from '../shared/models';
import { MessageService, ConfigurationService } from '../shared/services/api';
import { SwalService } from '../shared/services';
// import {  Message,  } from 'src/app/shared/models';
// import { SwalService } from 'src/app/shared/services';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
 
  message: Message = new Message();

  isBusy: boolean = false

  busySaving: boolean = false;
  formSubmitted: boolean = false;


  Address: string;
  Facebook: string;
  Logo: string;
  Email: string;
  Telephone: string;
  Fax: string;
  LinkedIn: string;
  configuration: Configuration;

  isEdit: boolean = false;
language: string;
myStyles={};
ar: boolean;

   constructor(     private messageServices: MessageService,
   private swalService: SwalService,
   private configurationServices: ConfigurationService) { }

  ngOnInit() {
     this.message = new Message()
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
         this.Fax =  this.configuration.data[5].value;
 
     })
    }


  reset() {
    this.message.firstName = null;
    this.message.lastName =null;
    this.message.email =null;
    this.message.description =null;
    
      }


      
  

      save( ) {
        
        this.messageServices.create(this.message).subscribe(
          res => {
            this.swalService.Notifier('Done ');
             this.reset();
          },
          err => {
            const errorMessage = ' Saving Erroe   ';
            this.swalService.NotifierError(errorMessage)
    
          }
        )
      }

 
  }

