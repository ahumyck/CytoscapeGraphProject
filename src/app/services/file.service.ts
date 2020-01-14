import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class FileService {

    private url = 'http://localhost:8080/initial-graph';
    private postFileManager = '/post-file';


    constructor(private http: HttpClient) {
    }

    public postFile(file: string): Observable<any> {
        return this.http.post(this.url + this.postFileManager, file)
    };
}
