import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartItem } from '../models';

@Component({
  selector: 'app-item-details-comp',
  templateUrl: './item-details-comp.component.html',
  styleUrls: ['./item-details-comp.component.css']
})
export class ItemDetailsCompComponent implements OnInit, OnChanges {

  @Input() item: CartItem
  @Output() onUpdateItem = new EventEmitter<CartItem>();
  constructor(private fb: FormBuilder) {  }

  itemDetailsForm: FormGroup

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.itemDetailsForm = this.createForm(this.item)
  }

  createForm(item: CartItem = null) : FormGroup {
    return this.fb.group({
      id: this.fb.control(item?.id, [Validators.required]),
      item: this.fb.control(item?.item, [Validators.required]),
      quantity: this.fb.control(item?.quantity, [Validators.required, Validators.min(1)])
    })
  }

  updateItem() {
    //casting, coercion
    const updatedItem = this.itemDetailsForm.value as CartItem;
    this.onUpdateItem.next(updatedItem);
    console.log(updatedItem)
  }

}
