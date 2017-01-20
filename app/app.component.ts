import { Component } from '@angular/core';
import { Food } from './food.model';



@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Meal Tracker</h1>
    <food-list [childFoodList]="masterFoodList" (clickSender)="editFood($event)"></food-list>
  <hr>
    <edit-food [childSelectedFood]="selectedFood" (closeEditFoodFormSender)="finishedEditing()"></edit-food>
    <button class="btn btn-success" (click)="showNewFoodForm()">Add New Food</button>
    <div class="new-food" *ngIf="newFood">
      <h4>New Food</h4>
      <div class="form-group">
        <label htmlFor="new-food-name">Name</label>
        <input type="text" class="form-control" [(ngModel)]="newFood.name" id="new-food-name"/>
      </div>
      <div class="form-group">
        <label htmlFor="new-food-details">Details</label>
        <input type="text" class="form-control" [(ngModel)]="newFood.details" id="new-food-details"/>
      </div>
      <div class="form-group">
        <label htmlFor="new-food-calories">Calories</label>
        <input type="text" class="form-control" [(ngModel)]="newFood.calories" id="new-food-calories"/>
      </div>
      <button class="btn btn-info" (click)="saveNewFood(newFood)">Save</button>
      </div>
    </div>
  `
})

export class AppComponent {
  selectedFood = null;
  masterFoodList: Food[] = [
    new Food("Cheesburger", "Didn't come with Onions", 450),
    new Food("Apple", "Honeycrisp from Washington", 90),
    new Food("Chef Salad", "Forgot the tomatoes", 300)
  ];

  newFood = null;

  editFood(clickedFood) {
    this.selectedFood = clickedFood;
  }

  finishedEditing() {
    this.selectedFood = null;
  }
  showNewFoodForm() {
    this.newFood = {};
  }
  saveNewFood(params) {
    let food = new Food(params.name, params.details, params.calories);
    this.foods.push(food);
    this.newFood = null;
  }
}
