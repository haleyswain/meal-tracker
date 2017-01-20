import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';


@Component({
  selector: 'food-list',
  template: `
  <div [class]="foodList" *ngFor="let currentFood of childFoodList">
    <h3>{{currentFood.name}}</h3>
    <h5>Details: {{currentFood.details}}</h5>
    <h5>Calories: {{currentFood.calories}}</h5>
    <button class="btn btn-info edit" (click)="editButtonHasBeenClicked(currentFood)">Edit</button>
  </div>
  `
})

export class FoodListComponent {
  @Input() childFoodList: Food[];
  @Output() clickSender = new EventEmitter();



  editButtonHasBeenClicked(foodToEdit) {
     this.clickSender.emit(foodToEdit);
   }
 }
