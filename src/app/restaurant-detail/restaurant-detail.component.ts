import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'app/restaurants/restaurant/restaurant.model';
import { RestaurantsServices } from 'app/restaurants/restaurants.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant

  constructor(
    private restaurantsService: RestaurantsServices,
    private route: ActivatedRoute
  ) {


  }

  ngOnInit() {
    this.restaurantsService.restaurantById(this.route.snapshot.params['id'])
      .subscribe(rest => this.restaurant = rest)
  }

}
