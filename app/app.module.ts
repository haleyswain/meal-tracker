import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule } from '@angular/forms';
import { FoodListComponent }  from './food-list.component';
import { EditFoodComponent } from './edit-food.component';
import { NewFoodComponent } from './new-food.component';



@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, FoodListComponent, EditFoodComponent, NewFoodComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
