import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MyServService {

  constructor(private http: Http) { }

  private baseUrl = "http://localhost:51535/"


//method to get data from api
getData(){
  var url = this.baseUrl + "api/values";
return this.http.get(url).map(response => response.json()).catch(this.handleError);
}

getItems() {
 var url = this.baseUrl + "api/items";
 return this.http.get(url).map(response => response.json()).catch(this.handleError);
}


getSerializedItem() {
 var url = this.baseUrl + "api/items/GetRandom";
 return this.http.get(url).map(response => response.json()).catch(this.handleError);
}


getSerializedOneItem() {
 var url = this.baseUrl + "api/items/GetRandom/5";
 return this.http.get(url).map(response => response.json()).catch(this.handleError);
}


//testing method
public test()
{
console.log("MyServService");
}

   private handleError(error: Response) {
        // output errors to the console.
        console.error(error);
        return Observable.throw(error.json().error || "Server error");
    }
ngOninit(){
}

}
