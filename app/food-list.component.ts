import { Component } from '@angular/core';
import { Food } from './food.model';


@Component({
  selector: 'food-list',
  template: `
  <div [class]="foodList" *ngFor="let food of foods">
    <h3>{{food.name}}</h3>
    <h5>Details: {{food.details}}</h5>
    <h5>Calories: {{food.calories}}</h5>
    <button class="btn btn-info edit" (click)="showEditFoodForm(food)">Edit</button>
  </div>
  `
})

export class FoodListComponent {
  foods: Food[] = [
    new Food("Cheesburger", "Didn't come with Onions", 450),
    new Food("Apple", "Honeycrisp from Washington", 90),
    new Food("Chef Salad", "Forgot the tomatoes", 300)
  ];

  newFood = null;

  showEditFoodForm(food) {
     this.currentFood = food;
   }
 }
}
