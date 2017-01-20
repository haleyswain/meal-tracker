import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Meal Tracker</h1>
    <div [class]="foodList" *ngFor="let food of foods">
      <h3>{{food.name}}</h3>
      <h5>Details: {{food.details}}</h5>
      <h5>Calories: {{food.calories}}</h5>
      <button class="btn btn-info edit" (click)="showEditFoodForm(food)">Edit</button>
    </div>
  </div>
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
  `
})

export class AppComponent {
  foods: Food[] = [
    new Food("Cheesburger", "Didn't come with Onions", 450),
    new Food("Apple", "Honeycrisp from Washington", 90),
    new Food("Chef Salad", "Forgot the tomatoes", 300)
  ];

  newFood = null;
  currentFood = null;


  showEditFoodForm(food) {
    this.currentFood = food;
  }
  closeEditFoodForm() {
    this.currentFood = null;
  }
}

export class Food {
  constructor(
    public name: string,
    public details: string,
    public calories: number,
  ) {};
}
