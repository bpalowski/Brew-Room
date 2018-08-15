import { Component } from '@angular/core';
import { Brew } from './models/brew.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Grand Wizard Eddies Potion Brewing Hut';

  potions: Brew[] = [
    new Brew("Dragon Tooth Tea", "Health", 75, 300),
    new Brew("Titan Grip", "Strength", 45, 150),
    new Brew("Mana Wraith Essence", "Mana", 50, 200),
    new Brew("Giant's Toe Ale", "Stamina", 25, 100)
  ]



  editTask(potList){
    this.potions = null;
  }



  textColor(potList){
    if (potList.type === "Health"){
      return "text-success";
    }else if (potList.type === "Strength"){
      return "text-danger";
    }else if (potList.type === "Mana"){
      return "text-primary";
    }else if(potList.type === "Stamina"){
      return "text-warning";
    }

  }
}
