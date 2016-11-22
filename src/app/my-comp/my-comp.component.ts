import { Component, OnInit } from '@angular/core';
import {MyServService} from './my-serv.service';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/filter';


class Item
{
description: string;
id: number;
title: string;

}


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



//принимает весь массив и выделяет из него только то, что содержит в себе 34 (и выводить только первый элемент)
   this.MyServService.getItems().map(epics => epics.filter(epic => epic.id === 34)[0]).subscribe(items => console.log(items),
                                         error => this.errorMessage = <any>error);


  this.MyServService.getSerializedItem().subscribe(items => console.log(items),
                            error => this.errorMessage = <any>error);
                                         
  }

}

