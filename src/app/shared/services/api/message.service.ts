import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from '../../models';
import { END_POINTS } from './globals/global-config';

const API_URL = END_POINTS.message;

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) { }

  create(model: Message): Observable<Message[]> {
    return this.http.post<Message[]>(API_URL, model);
  }
}
