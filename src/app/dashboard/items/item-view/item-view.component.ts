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

  constructor(private activatedRoute: ActivatedRoute, private itemservice: ItemsService, private fb: FormBuilder) {


   }



  ngOnInit() {


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

   onSubmit({ value, valid }: { value: User, valid: boolean }) {
    console.log(value, valid);
  }

}
