import { Injectable } from '@angular/core';
import { Freelancer } from '../model/freelancer';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FreelancerService {
  private freelancerUrl: string = 'http://localhost:3005/freelancers'
  private find = new BehaviorSubject("")
  currentFind = this.find.asObservable()
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' })
  }
  getFreelancers(): Observable<Freelancer[]> {
    return this.http.get<Freelancer[]>(this.freelancerUrl)
  }
  getFreelancer(id: number): Observable<Freelancer> {
    const urlByID = `${this.freelancerUrl}/${id}`
    return this.http.get<Freelancer>(urlByID)
  }
  getFreelancerSearch(data: string) {
    this.find.next(data)
  }
  addFreelancer(freelancer: Freelancer): Observable<Freelancer> {
    return this.http.post<Freelancer>(this.freelancerUrl, freelancer, this.httpOptions)
  }
  deleteFreeLancer(id: number): Observable<Freelancer> {
    const urlByID = `${this.freelancerUrl}/${id}`
    return this.http.delete<Freelancer>(urlByID)
  }
}
