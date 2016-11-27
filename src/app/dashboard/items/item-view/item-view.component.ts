import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { ItemsService } from '../../../services/items.service';
//import * as console from 'console';
import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { item } from '../item';
import { User } from './signup.interface';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.css']
})
export class ItemViewComponent implements OnInit {

@Input() name: string;
s: any;
item: item 

test:any;

user: FormGroup;

itemData: FormGroup;

myGroup: FormGroup;

newItem: FormGroup;

  constructor(private activatedRoute: ActivatedRoute, private itemservice: ItemsService, 
  private fb: FormBuilder, private fb3: FormBuilder,  private fb2: FormBuilder, private fb4: FormBuilder) {


   }



  ngOnInit() {

    this.itemData = this.fb2.group({
Name: ['myname']
    });


    this.newItem = this.fb4.group({

Name:  ['typenamehere'],
Text: ['typetexthere'],
Viewed: ['numberofcounts']

    });

    this.myGroup = this.fb3.group({
       firstName:  ['', Validators.required]
    });

        this.user = this.fb.group({
      name: ['testname', [Validators.required, Validators.minLength(2)]],
      account: this.fb.group({
        email: ['', Validators.required],
        confirm: ['', Validators.required]
      })
    });
    
    var id = +this.activatedRoute.snapshot.params["id"];
  console.log(id);
  console.log("test input name");
  
 this.itemservice.getItem(id).subscribe(item => this.item = item[0]);
  
  //  console.log(name);

  }

 showItemInCOnsole()
 {


//this.item = this.test;
console.log(this.item ); 

 }


onUpdate(item2){

  this.item.Name = item2.value.Name;

this.itemservice.update(this.item).subscribe((data) => {console.log(data); console.log("testing")});

//console.log(item2.value);

}


   onSubmit({ value, valid }: { value: User, valid: boolean }) {
    console.log(value, valid);
    console.log(this.itemData.value);
console.log(this.myGroup.value);
  };


postNewItem({value}: {value: item}) {
  
  console.log(value);
  this.itemservice.add(value).subscribe();

};

}
