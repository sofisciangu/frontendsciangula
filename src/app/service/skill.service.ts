//import { HttpClient } from '@angular/common/http';
//import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs';
//import { environment } from '../environments/environment';
//import { Skill } from '../model/skill';

//@Injectable({
//  providedIn: 'root'
//})
//export class SkillService {
//  hysURL = 'https://backendsciangula.onrender.com/hys'
  
//  constructor(private httpClient: HttpClient) { }

//  public lista(): Observable<Skill[]>{
//    return this.httpClient.get<Skill[]>(this.hysURL + 'lista');
//  }

//  public detail(id: number): Observable<Skill>{
//    return this.httpClient.get<Skill>(this.hysURL + `detail/${id}`);
//  }

//  public save(skill: Skill): Observable<any>{
//    return this.httpClient.post<any>(this.hysURL + 'create', skill);
//  }

//  public update(id: number, skill: Skill): Observable<any>{
//    return this.httpClient.put<any>(this.hysURL + `update/${id}`, skill);
//  }

//  public delete(id: number): Observable<any>{
//    return this.httpClient.delete(this.hysURL + `delete/${id}`);
//  }
//}
