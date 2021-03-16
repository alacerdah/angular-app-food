import { CartItem } from "./cart-item.model"
import { MenuItem } from "../menu-item/menu-item.model"
import { Injectable } from "@angular/core"
import { NotificationService } from "app/shared/messages/notification.service"

@Injectable()
export class ShoppingCartService {
    items: CartItem[] = []

    constructor(private serviceN : NotificationService){

    }

    clear() {
        this.items = []
    }
    addItem(item: MenuItem) {
        let fountItem = this.items.find((mItem) => mItem.menuItem.id === item.id)
        if (fountItem) {
            this.increaseQty(fountItem)
        } else {
            this.items.push(new CartItem(item))
        }
        this.serviceN.notify(`Você adicionou o item ${item.name}`)
    }
    removeItem(item: CartItem) {
        this.items.splice(this.items.indexOf(item), 1)
        this.serviceN.notify(`Você removeu o item ${item.menuItem.name}`)
    }
    total(): number {
        return this.items
            .map(item => item.value())
            .reduce((prev, value) => prev + value, 0)
    }
    increaseQty(item: CartItem) {
        item.quantity = item.quantity + 1
    }
    decreaseQty(item: CartItem) {
        item.quantity = item.quantity - 1
        if (item.quantity === 0)
            this.removeItem(item)
    }
}