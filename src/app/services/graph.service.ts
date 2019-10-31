import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FileService} from "./file.service";

@Injectable({
  providedIn: 'root'
})
export class GraphService {


  url = 'http://localhost:8080/brute-force';
  execute = '/execute';
  lastSolution = '/solution/end';
  initialGraph = '/initial-graph';
  currentSolution = '/solution';

  header = new HttpHeaders({
	  'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient,
              private fileService: FileService) { }


  // Everything returns Observable<Graph>
  // todo: make Graph class
  public solve(starCount: number): Observable<any> {
    return this.http.post<any>(this.url + this.execute,
    {
      starsCount : starCount
    });
  }

  public getLastSolution(): Observable<any> {
	  return this.getter(this.url + this.lastSolution, this.header);
  }

  public getSolution(solution: number): Observable<any> {
    return this.getter(this.url + this.currentSolution + solution.toString(), this.header);
  }

  public getInitialGraph(): Observable<any> {
	  return this.getter(this.url + this.initialGraph, this.header);
  }

  public getMatrixFromFile(file: string): Observable<any> {
    // @ts-ignore
    return this.fileService.postFile(file);
  }

  private getter(url: string, header: HttpHeaders): Observable<any> {
    return this.http.get<any>(url, { headers : header });
  }
}
