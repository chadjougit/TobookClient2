import { Component, OnInit } from '@angular/core';
import {MyServService} from './my-serv.service';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-my-comp',
  templateUrl: './my-comp.component.html',
  styleUrls: ['./my-comp.component.css']
})
export class MyCompComponent implements OnInit {


errorMessage: string;

  constructor(private MyServService: MyServService) { }

  ngOnInit() {

    console.log("MyCompComponent"); 
    this.MyServService.test();
    this.MyServService.getData().subscribe(items => console.log(items),
                                         error => this.errorMessage = <any>error);
  }

}
