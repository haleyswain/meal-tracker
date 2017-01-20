import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector:"edit-food",
  template: `
  <div class="edit-food" *ngIf="childSelectedFood">
    <h4>Edit Food</h4>
    <div class="form-group">
      <label htmlFor="edit-food-name">Name</label>
      <input type="text" class="form-control"
      [(ngModel)]="childSelectedFood.name" id="edit-food-name"/>
    </div>
    <div class="form-group">
      <label htmlFor="edit-food-details">Details</label>
      <input type="text" class="form-control"
      [(ngModel)]="childSelectedFood.details" id="edit-food-details"/>
    </div>
    <div class="form-group">
      <label htmlFor="edit-keg-calories">Calories</label>
      <input type="text" class="form-control"
      [(ngModel)]="childSelectedFood.calories" id="edit-food-calories"/>
      <button class="btn btn-warning" (click)="closeEditFoodForm()">Close Edit Form</button>
    </div>
    </div>

`
})

export class EditFoodComponent {
  @Input() childSelectedFood: Food;
  @Output() closeEditFoodFormSender = new EventEmitter();

    closeEditFoodForm() {
    this.closeEditFoodFormSender.emit();
  }
}
