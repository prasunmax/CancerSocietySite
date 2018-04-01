import { Injectable, Inject } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

@Injectable()
export class SumitaHttpService {
  private worker: Worker;
  url = 'http://app.sumitacancersociety.org/index.php/service/';
  constructor(private http: Http) {
  }

  getData(path) {
    console.log('In http Service' + path);
    return this.http.get(this.url + path)
      .map((data: Response) => data.json()).
      catch(this.handleError);
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
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://sumitacancersociety.org/service' + path, body, {
      headers: headers
    })
      .map((data: Response) => data.json())
      .catch(this.handleError);
  }

  putData(path, inpBody) {
    const body = JSON.stringify(inpBody);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put('http://sumitacancersociety.org/service' + path, body, {
      headers: headers
    })
      .map((data: Response) => data.json())
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.log(error);
    return Observable.throw(error.json());
  }
}
