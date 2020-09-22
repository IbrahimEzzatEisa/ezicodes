import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient  } from '@angular/common/http';


import { END_POINTS } from './globals/global-config';
import { Whyezi } from '../../models';
import { DataWithRanking } from '../../models/data-with-ranking.model';
const API_URL = END_POINTS.why;

@Injectable({
  providedIn: 'root'
})
export class WhyService {

  constructor(private http: HttpClient) { }

  create(model: Whyezi): Observable<Whyezi[]> {
    return this.http.post<Whyezi[]>(API_URL, model);
  }
  getAll(): Observable<DataWithRanking<Whyezi>> {
    return this.http.get<DataWithRanking<Whyezi>>(API_URL, {params:{
      pages : '-1'
    }});
  }

  update( id: number ,model: Whyezi): Observable<DataWithRanking<Whyezi>> {
    return this.http.put<DataWithRanking<Whyezi>>(API_URL +`/${id}`, model);
  }
  delete(id): Observable<Whyezi>{
    return this.http.delete<Whyezi>(API_URL + `/${id}`);
  }


  getAllServicesByLang(language: string): Observable<DataWithRanking<Whyezi>> {     
    return this.http.get<DataWithRanking<Whyezi>>(API_URL  ,{params:{
      pages : '-1'
    },headers:{
      'Accept-Language':language
    }});
  }
}
