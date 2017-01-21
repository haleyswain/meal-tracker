import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';


@Component({
  selector: 'food-list',
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="allFoods" selected="selected">All Foods</option>
    <option value="lowCalories">Low Calorie Foods</option>
    <option value="highCalories">High Calorie Foods</option>
  </select>

  <div [class]="foodList" *ngFor="let currentFood of childFoodList | calorie:filterByCalorie">
    <h3>{{currentFood.name}}</h3>
    <h5>Details: {{currentFood.details}}</h5>
    <h5>Calories: {{currentFood.calories}}</h5>
    <button class="btn btn-danger edit" (click)="editButtonHasBeenClicked(currentFood)">Edit</button>
  </div>
  `
})

export class FoodListComponent {
  @Input() childFoodList: Food[];
  @Output() clickSender = new EventEmitter();

  filterByCalorie: string = "highCalorie";


  editButtonHasBeenClicked(foodToEdit) {
     this.clickSender.emit(foodToEdit);
   }

   onChange(optionFromMenu) {
     this.filterByCalorie = optionFromMenu;
   }
 }
