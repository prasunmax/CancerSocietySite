import {Injectable} from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs';
import {HttpClient, HttpHeaders} from "@angular/common/http";


@Injectable()
export class SumitaHttpService {
  private worker: Worker;
  url = 'http://app.sumitacancersociety.org/index.php/service/';

  constructor(private http: HttpClient) {
  }

  getData(path) {
    console.log('In http Service' + path);
    return this.http.get(this.url + path, {
      observe: 'body',
      responseType: 'json'
    });
    /*return this.http.get("http://sumitacancersociety.org/service" + path)
      .map((data:Response) => data.json());*/
  }

  insertData(path, inpBody) {
    return this.putData(path, inpBody);
  }

  updateData(path, inpBody) {
    return this.putData(path, inpBody);
  }

  postData(path, inpBody) {
    const body = JSON.stringify(inpBody);
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<any>('http://sumitacancersociety.org/service' + path, body, {
      headers: headers
    });
  }

  putData(path, inpBody) {
    const body = JSON.stringify(inpBody);
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.put('http://sumitacancersociety.org/service' + path, body, {
      headers: headers
    });
  }

  private handleError(error: any) {
    console.log(error);
    return Observable.throw(error.json());
  }
}
