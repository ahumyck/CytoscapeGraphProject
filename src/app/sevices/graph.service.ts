import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraphService {


  url: string = "http://localhost:8080/brute-force";
  execute: string = "/execute";
  lastSolution: string = "/solution/end";
  initialGraph: string = "/initial-graph";
  currentSolution : string = "/solution";

  header = new HttpHeaders({
	  'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient) { }


  //Everything returns Observable<Graph>
  //todo: make Graph class
  public solve(starCount : number) : Observable<any>{
    return this.http.post<any>(this.url + this.execute,{
      "starsCount" : starCount
    });
  }

  public getLastSolution() : Observable<any> {
	  return this.getter(this.url + this.lastSolution, this.header);
  }

  public getSolution(solution : number) : Observable<any> {
    return this.getter(this.url + this.currentSolution + solution.toString(), this.header);
  }

  public getInitialGraph() : Observable<any> {
	  return this.getter(this.url + this.initialGraph,this.header);
  }

  private getter(url: string, header: HttpHeaders) : Observable<any> {
    return this.http.get<any>(url, { 'headers' : header });
  }
}
