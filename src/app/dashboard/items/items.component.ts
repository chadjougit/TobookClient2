//import * as console from 'console';
import { item } from './item';
import { ItemsService } from '../../services/items.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: item[];
  errorMessage: string;
 selectedItem: item;
  constructor(private ItemsService: ItemsService, private router: Router) { }

  ngOnInit() {

    this.ItemsService.getLatestItems().subscribe(items => (this.items = items),
      error => this.errorMessage = <any>error);
  }

  onSelect(item: item) {
    console.log("test item");
    console.log(item);

    this.router.navigate(["ParentComponent/ItemViewComponent", item.Id]);


  }
}


