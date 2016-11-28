import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { item } from '../dashboard/items/item';
//import * as console from 'console';

@Injectable()
export class ItemsService {

    constructor(private http: Http) { }

    private baseUrl = "http://localhost:50598/"


    //method to get data from api
    getData() {
        var url = this.baseUrl + "api/values";
        return this.http.get(url).map(response => response.json()).catch(this.handleError);
    }

    getItems() {
        var url = this.baseUrl + "api/items";
        return this.http.get(url).map(response => response.json()).catch(this.handleError);
    }

    getLatestItems() {
        var url = this.baseUrl + "api/items/getlatest";
        return this.http.get(url).map(response => response.json()).catch(this.handleError);
    }

    getItem(id: number) {
        var url = this.baseUrl + "api/items/GetItem/" + id;
        return this.http.get(url).map(response => response.json()).catch(this.handleError);


    }


    update(item: item) {
        var url = this.baseUrl + "api/items/PutItem/" + item.Id;
        return this.http.put(url, JSON.stringify(item), this.getRequestOptions())
            .map(response => response.json())
            .catch(this.handleError);
    }


    add(item: item) {
        var url = this.baseUrl +"api/items/AddItem";
        return this.http.post(url, JSON.stringify(item), this.getRequestOptions())
        .map(response => response)
        .catch(this.handleError);


    }


    delete(id: number) {
        var url = this.baseUrl +"api/items/DeleteItem/" + id;
        return this.http.delete(url)
        .map(response => response);


    }


    private getRequestOptions() {
        return new RequestOptions({
            headers: new Headers({
                "Content-Type": "application/json"
            })
        });
    }





    /////////////////////////////




    getSerializedItem() {
        var url = this.baseUrl + "api/items/GetRandom";
        return this.http.get(url).map(response => response.json()).catch(this.handleError);
    }


    getSerializedOneItem() {
        var url = this.baseUrl + "api/items/GetRandom/5";
        return this.http.get(url).map(response => response.json()).catch(this.handleError);
    }


    //testing method
    public test() {
        console.log("MyServService");
    }

    private handleError(error: Response) {
        // output errors to the console.
        console.error(error);
        return Observable.throw(error.json().error || "Server error");
    }
    ngOninit() {
    }

}
