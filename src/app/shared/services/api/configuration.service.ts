import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient  } from '@angular/common/http';


import { END_POINTS } from './globals/global-config';
import { Configuration } from '../../models/configuration.model';
import { DataWithRanking } from '../../models/data-with-ranking.model';
const API_URL = END_POINTS.configuration 
@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  constructor(private http: HttpClient) { }


  // getAll(): Observable<Configuration[]> {
  //   return this.http.get<Configuration[]>(API_URL, {params:{
  //     pages : '-1'
  //   }});
  // }

  // getAllConfigurationByLang(language: string): Observable<DataWithRanking<Configuration>> {     
  //   return this.http.get<DataWithRanking<Configuration>>(API_URL  ,{params:{
  //     pages : '-1'
  //   },headers:{
  //     'Accept-Language':language
  //   }});
  // }


  getAllConfigurationByLang(language: string): Observable<Configuration> {     
    return this.http.get<Configuration>(API_URL  ,{params:{
      pages : '-1'
    },headers:{
      'Accept-Language':language
    }});
  }
  
}
