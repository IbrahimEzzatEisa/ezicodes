import { Component, OnInit } from '@angular/core';
import { SlideservicesService } from '../shared/services/api/slideservices.service';
import { Services, Message, Whyezi, Configuration } from '../shared/models';
import { MessageService, ConfigurationService, WhyService } from '../shared/services/api';
import { SwalService } from '../shared/services';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html', 
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {
  focus;
  focus1;


  Address: string;
  Facebook: string;
  Logo: string;
  Email: string;
  Telephone: string;
  Fax: string;
  LinkedIn: string;
  configuration: Configuration;
  content: string;
  image: string;
  close:boolean  = true;

  whyItem: Whyezi[]=[];

  images : string
  titels : string
  intro : string
  servicesItem : Services[] =[];
  message: Message = new Message();
  isBusy: boolean = false

  busySaving: boolean = false;
  formSubmitted: boolean = false;
  language: string;
  myStyles={};
  ar:boolean;

  constructor( private sliderService : SlideservicesService ,
    private messageServices: MessageService,
    private swalService: SwalService,
    private configurationServices: ConfigurationService ,
    private whyServices: WhyService

    ) { }

  ngOnInit() {
    this.message = new Message()
    this.getSliderServices();

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
      this.Address = this.configuration.data[0].value;
      this.Email =  this.configuration.data[3].value;;
      this.Telephone = this.configuration.data[4].value;
       this.Facebook =  this.configuration.data[1].value;
        this.LinkedIn =  this.configuration.data[6].value;
        this.Fax =  this.configuration.data[5].value;
        this.content = this.configuration.data[7].value;
        this.image = 'http://api.ezicodes.com/'+this.configuration.data[8].value;

  }
  )

          // whyezi services
          this.language = localStorage.getItem('lang')

  this.whyServices.getAllServicesByLang(this.language).subscribe(res =>{
    this.whyItem = res.data.map(item =>{
      item.icon = 'http://api.ezicodes.com/'+item.icon;
      return item;

    })


})

  }


  // services
getSliderServices(){
  this.language = localStorage.getItem('lang')
  this.sliderService.getAllServByLang(this.language).subscribe(res =>{
    this.servicesItem = res.data.map(data =>{
      data.image = 'http://api.ezicodes.com/'+data.image
      return data;
    })

    this.changeImageServices()
  })
}


changeImageServices(){
  if(this.servicesItem.length < 1) return
  let index = 0
  setInterval(() => {
    this.close  = false;
    if(index == this.servicesItem.length){ index = 0}
    this.images= this.servicesItem[index].image;
    this.titels = this.servicesItem[index].title;
    this.intro = this.servicesItem[index].intro;
    index = index + 1
  }, 4000);
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
