import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { OrderComponent } from "./order.component";
import { OrderItemComponent } from "./order-item/order-item.component";

export class LeaveOrderGuard implements CanDeactivate<OrderComponent> {
    constructor() {

    }
    canDeactivate(orderComponent: OrderComponent,
                  activatedRoute: ActivatedRouteSnapshot, 
                  routerState: RouterStateSnapshot): boolean{
        if(!orderComponent.isOrderCompleted()){
            return window.confirm('Deseja desistir da compra?')
        }else {
            return true
        }
    }

}