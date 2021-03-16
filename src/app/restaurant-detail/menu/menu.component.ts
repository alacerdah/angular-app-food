import { Component, OnInit } from '@angular/core';
import { RestaurantsServices } from 'app/restaurants/restaurants.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from '../menu-item/menu-item.model';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menu: Observable<MenuItem[]>

  constructor(
    private restaurantsService: RestaurantsServices,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.menu = this.restaurantsService
        .menuOfRestaurants(this.route.parent.snapshot.params['id'])
  }
  addMenuItem(item: MenuItem){
    console.log(item)
  }
}
