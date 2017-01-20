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
    <new-food (newFoodSender)="addFood($event)"></new-food>
    </div>
  `
})

export class AppComponent {
  selectedFood = null;
  newFood = null;
  masterFoodList: Food[] = [
    new Food("Cheesburger", "Didn't come with Onions", 450),
    new Food("Apple", "Honeycrisp from Washington", 90),
    new Food("Chef Salad", "Forgot the tomatoes", 300)
  ];


  editFood(clickedFood) {
    this.selectedFood = clickedFood;
  }

  finishedEditing() {
    this.selectedFood = null;
  }
  showNewFoodForm() {
    this.newFood = {};
  }
  addFood(newFoodFromChild: Food) {
    this.masterFoodList.push(newFoodFromChild);
  }
}
