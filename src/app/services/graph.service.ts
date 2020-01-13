import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FileService} from "./file.service";

@Injectable({
    providedIn: 'root'
})
export class GraphService {
    url = 'http://localhost:8080';
    greedySolve = '/greedy';

    header = new HttpHeaders({
        'Content-Type': 'application/json',
    });

    constructor(private http: HttpClient,
                private fileService: FileService) {
    }


    // Everything returns Observable<Optional<GraphDTO>>
    public greedy(starCount: number): Observable<any> {
        return this.http.post<any>(this.url + this.greedySolve,
            {
                starsCount: starCount
            });
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
