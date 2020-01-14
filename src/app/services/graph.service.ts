import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class GraphService {
    private url = 'http://localhost:8080';
    private greedy = '/greedy';
    private genetic = '/genetic';

    constructor(private http: HttpClient) {
    }


    public greedySolve(starCount: number): Observable<any> {
        return this.http.post<any>(this.url + this.greedy,
            {
                starsCount: starCount
            });
    }

    public geneticSolve(): Observable<any> {
        return this.http.post<any>(this.url + this.genetic,{});
    }



    // public getLastSolution(): Observable<any> {
    //     return this.getter(this.url + this.lastSolution, this.header);
    // }
    //
    // public getSolution(solution: number): Observable<any> {
    //     return this.getter(this.url + this.currentSolution + solution.toString(), this.header);
    // }
    //
    // public getInitialGraph(): Observable<any> {
    //     return this.getter(this.url + this.initialGraph, this.header);
    // }
}
