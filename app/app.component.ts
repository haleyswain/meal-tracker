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
  showNewFoodForm() {
    this.newFood = {};
  }
  saveNewFood(params) {
    let food = new Food(params.name, params.details, params.calories);
    this.foods.push(food);
    this.newFood = null;
  }
}

export class Food {
  constructor(
    public name: string,
    public details: string,
    public calories: number
  ) {};
}
