import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient  } from '@angular/common/http';


import { DataWithRanking } from '../../models/data-with-ranking.model';
import { Slider, Services } from '../../models';
import { END_POINTS } from './globals/global-config';
const API_URL = END_POINTS.slide;
const API = END_POINTS.services;

@Injectable({
  providedIn: 'root'
})
export class SlideservicesService {

  constructor(private http: HttpClient) { }

  
  // getAll(): Observable<DataWithRanking<Slider>> {
  //   return this.http.get<DataWithRanking<Slider>>(API_URL, {params:{
  //     pages : '-1'
  //   }});
  // }

  getAllByLang(language: string): Observable<DataWithRanking<Slider>> {     
    return this.http.get<DataWithRanking<Slider>>(API_URL  ,{params:{
      pages : '-1'
    },headers:{
      'Accept-Language':language
    }});
  }


  // getAllservices(): Observable<DataWithRanking<Services>> {
  //   return this.http.get<DataWithRanking<Services>>(API, {params:{
  //     pages : '-1'
  //   }});
  // }

  getAllServByLang(language: string): Observable<DataWithRanking<Services>> {     
    return this.http.get<DataWithRanking<Services>>(API  ,{params:{
      pages : '-1'
    },headers:{
      'Accept-Language':language
    }});
  }
}
