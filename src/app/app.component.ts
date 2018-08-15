import { Component } from '@angular/core';
import { Brew } from './models/brew.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Grand Master Eddies Potion Brewing Hut';

  potions: Brew[] = [
    new Brew("Dragon Tooth Tea", "Health", ["b", "a", "c"],75, 300, "One"),
    new Brew("Titan Grip", "Strength", ["b"],45, 150, "Two"),
    new Brew("Mana Wraith Essence", "Mana", ["b"],50, 200, "Three"),
    new Brew("Giant's Toe Ale", "Stamina", ["b"],25, 100, "Four")
  ]

  newPot = null;

  editTask(clickedPot) {
      this.newPot = clickedPot;
    }
  finishedEditing() {
      this.newPot = null;
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
