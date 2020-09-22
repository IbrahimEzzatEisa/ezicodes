import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { Message, Slider, Services, Configuration } from '../shared/models';
import { SwalService } from '../shared/services';
import { MessageService, SlideservicesService, ConfigurationService } from '../shared/services/api';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    model = {
        left: true,
        middle: false,
        right: false
    };

    focus;
    focus1;
    myStyles={}

    message: Message = new Message();
    modelOpen: boolean = false;
    slider : Slider[] =[];
    servicesItem : Services[] =[];
   
    image : string
    titel : string
    desc : string
   
   
    images : string
    titels : string
    desccription : string
   
    isBusy: boolean = false
   dir: string;
   font: string;
    busySaving: boolean = false;
    formSubmitted: boolean = false;
    close: boolean = true;
    direction: string
    configuration: Configuration;
    language: string;
    constructor( private sliderService : SlideservicesService  ,
        private messageServices: MessageService,
        private swalService: SwalService,
        private router: Router ,
        private configurationServices: ConfigurationService ,
        private renderer2: Renderer2,

        
        ) { 
        }
    ngOnInit() {
        this.message = new Message()

        this.getSlider();
        this.getDirective();
        
        this.language = localStorage.getItem('lang')
        if (this.language === 'ar') {
          this.myStyles = {
            'font-family': 'Arabic',
            }  

        } else {
          this.myStyles = {
            'font-family': 'NoirStd',
            }    
  
        }
      

    }

    
  
      
    





getDirective(){
  this.direction= localStorage.getItem('dir');
  this.router.navigate(['home']);
}
    
  getSlider(){
    this.language = localStorage.getItem('lang')
    this.sliderService.getAllByLang(this.language).subscribe(res =>{
      this.slider = res.data.map(item =>{
        item.image = 'http://api.ezicodes.com/'+item.image
        return item;

      })

      this.changeImage()
    }     

    )   
  }


  changeImage(){
    if(this.slider.length < 1) return
    let index = 0
    setInterval(() => {

      if(index == this.slider.length)
      { index = 0 

      }
      this.close  = false;
      
      this.image= this.slider[index].image;
      this.titel = this.slider[index].title;
      this.desc = this.slider[index].description;
      index = index + 1

    }, 6000);

  }





  reset() {
this.message.firstName = null;
this.message.lastName =null;
this.message.email =null;
this.message.description =null;

  }


  
  save(...args: boolean[]) {
    this.formSubmitted = true;
      this.isBusy = true
      this.messageServices.create(this.message).subscribe(res => {
        this.isBusy = false
        this.swalService.Notifier('Message Send success   ');

        this.formSubmitted = false;
        this.reset();
       
      }, err => {
        this.isBusy = false
        let errorMessage = err.data || ' Error Sending Message  ';
        this.swalService.NotifierError(errorMessage)

      

      })
    } 
}
