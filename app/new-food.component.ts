import { Component, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'new-food',
  template: `
    <h3>New Food</h3>
    <button class="btn btn-success" (click)="showNewFoodForm()">Add New Food</button>
    <div class="new-food" *ngIf="newFood">
      <div>
        <label>Enter Food Name:</label>
        <input #newName>
      </div>
      <div>
        <label>Enter Food Details:</label>
        <input #newDetails>
      </div>
      <div>
        <label>Enter Number of Calories:</label>
        <input #newCalories>
      </div>
      <button (click)="submitForm(newName.value, newDetails.value, newCalories.value); newName.value=''; newDetails.value=''; newCalories.value='';">Add</button>
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
