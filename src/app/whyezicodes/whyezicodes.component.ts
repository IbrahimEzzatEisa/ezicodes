import { Component, OnInit } from '@angular/core';
import { Whyezi } from '../shared/models';
import { WhyService } from '../shared/services/api';

@Component({
  selector: 'app-whyezicodes',
  templateUrl: './whyezicodes.component.html',
  styleUrls: ['./whyezicodes.component.scss']
})
export class WhyezicodesComponent implements OnInit {


  
 whyItem: Whyezi[]=[];
 language: string;
 myStyles={}
 ar: boolean;
  constructor( private whyServices: WhyService) { }

  ngOnInit() {

    this.language = localStorage.getItem('lang')
    if (this.language === 'ar') {
      this.ar= true;
     this.myStyles = {
       'font-family': 'Arabic',
       }  

   } else {
     this.ar = false;
     this.myStyles = {
       'font-family': 'NoirStd',
       } 
    // whyezi services
  }
  this.language = localStorage.getItem('lang')

  this.whyServices.getAllServicesByLang(this.language).subscribe(res =>{
    this.whyItem = res.data.map(item =>{
      item.icon = 'http://api.ezicodes.com/'+item.icon;
      return item;

    })


})
  }
}


