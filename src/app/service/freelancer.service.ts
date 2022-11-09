import { Injectable } from '@angular/core';
import { Freelancer } from '../model/freelancer';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FreelancerService {
  private freelancerUrl: string = 'http://localhost:3005/freelancers'
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
  addFreelancer(freelancer: Freelancer): Observable<Freelancer> {
    return this.http.post<Freelancer>(this.freelancerUrl, freelancer, this.httpOptions)
  }
  deleteFreeLancer(id: number): Observable<Freelancer> {
    const urlByID = `${this.freelancerUrl}/${id}`
    return this.http.delete<Freelancer>(urlByID)
  }
}
