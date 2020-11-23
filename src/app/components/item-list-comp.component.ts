import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { CartItem } from '../models';

@Component({
  selector: 'app-item-list-comp',
  templateUrl: './item-list-comp.component.html',
  styleUrls: ['./item-list-comp.component.css']
})
export class ItemListCompComponent implements OnInit {

  constructor() { }

  @Input() contents: CartItem[]
  @Output() onItemSelect = new EventEmitter<string>()

  ngOnInit(): void {
  }

  seeItemDetails(id: string) {
    this.onItemSelect.next(id)
  }

  mouseover() {
    console.log("mouseover")
  }
}
