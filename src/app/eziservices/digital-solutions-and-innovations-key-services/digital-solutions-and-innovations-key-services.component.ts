import { Component, OnInit } from '@angular/core';
import { Services } from 'src/app/shared/models';
import { SlideservicesService } from 'src/app/shared/services/api';

@Component({
  selector: 'app-digital-solutions-and-innovations-key-services',
  templateUrl: './digital-solutions-and-innovations-key-services.component.html',
  styleUrls: ['./digital-solutions-and-innovations-key-services.component.scss']
})
export class DigitalSolutionsAndInnovationsKeyServicesComponent implements OnInit {


  images : string
  titels : string
  desccription : string
  intro: string;
  servicesItem : Services[] =[];

  close:boolean  = true;
language: string;
myStyles={};
  constructor(private sliderService : SlideservicesService ) { }

  ngOnInit() {
    this.getSliderServices();

  }
    // services
getSliderServices(){
  
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
    this.close = false;
    if(index == this.servicesItem.length){ index = 0}
    this.images= this.servicesItem[index].image;
    this.titels = this.servicesItem[index].title;
    this.desccription = this.servicesItem[index].description;
    this.intro = this.servicesItem[index].intro;

    index = index + 1
  }, 4000);
}

}
