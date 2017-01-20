import { Component } from '@angular/core';
import { Food } from './food.model';



@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Meal Tracker</h1>
    <food-list></food-list>
  <hr>
  <div class="edit-food" *ngIf="currentFood">
    <h4>Edit Food</h4>
    <div class="form-group">
      <label htmlFor="edit-food-name">Name</label>
      <input type="text" class="form-control"
      [(ngModel)]="currentFood.name" id="edit-food-name"/>
    </div>
    <div class="form-group">
      <label htmlFor="edit-food-details">Details</label>
      <input type="text" class="form-control"
      [(ngModel)]="currentFood.details" id="edit-food-details"/>
    </div>
    <div class="form-group">
      <label htmlFor="edit-keg-calories">Calories</label>
      <input type="text" class="form-control"
      [(ngModel)]="currentFood.calories" id="edit-food-calories"/>
      <button class="btn btn-warning" (click)="closeEditFoodForm()">Close Edit Form</button>
    </div>
    </div>
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


  newFood = null;
  currentFood = null;



  closeEditFoodForm() {
    this.currentFood = null;
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
