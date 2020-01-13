import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class FileService {

    url = 'http://localhost:8080/initial-graph';
    postFileManager = '/post-file';


    header = new HttpHeaders({
        'Content-Type': 'application/json',
    });

    constructor(private http: HttpClient) {
    }

    public postFile(file: string): Observable<any> {
        console.log('postfile');
        return this.http.post(this.url + this.postFileManager, file, {
            'headers': this.header
        })
    };
}
