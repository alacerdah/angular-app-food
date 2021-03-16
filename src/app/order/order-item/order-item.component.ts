import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';

@Component({
  selector: 'mt-order-item',
  templateUrl: './order-item.component.html'
})
export class OrderItemComponent implements OnInit {
  @Input() items: CartItem[]
  @Output() increaseQty = new EventEmitter<CartItem>()
  @Output() decreaseQty = new EventEmitter<CartItem>()
  @Output() remove = new EventEmitter<CartItem>()
  constructor() { }

  ngOnInit() {
  }
  emitIncreaseQty(item: CartItem) {
    this.increaseQty.emit(item)
  }
  emitDecreaseQty(item: CartItem) {
    this.decreaseQty.emit(item)
  }
  emitRemove(item: CartItem) {
    this.remove.emit(item)
  }
}
