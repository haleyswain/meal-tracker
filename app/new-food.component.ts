import { Component, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'new-food',
  template: `
    <h3>New Food</h3>
    <button class="btn btn-danger" (click)="showNewFoodForm()">Add New Food</button>
    <br>
    <div class="form-group" *ngIf="newFood">
    <br>
      <div class="form-group">
        <label>Enter Food Name:</label>
        <input #newName class="form-control">
      </div>
      <div class="form-group">
        <label>Enter Food Details:</label>
        <input #newDetails class="form-control">
      </div>
      <div class="form-group">
        <label>Enter Number of Calories:</label>
        <input #newCalories class="form-control">
      </div>
      <button class="btn btn-danger" (click)="submitForm(newName.value, newDetails.value, newCalories.value); newName.value=''; newDetails.value=''; newCalories.value='';">Add</button>
     </div>
  `
})

export class NewFoodComponent {
  newFood = null;
  @Output() newFoodSender = new EventEmitter();


  submitForm(description: string, details: string, calories: number) {
    var newFoodToAdd: Food = new Food(description, details, calories);
    this.newFoodSender.emit(newFoodToAdd);

  }
  showNewFoodForm() {
    this.newFood = {};
  }


}
