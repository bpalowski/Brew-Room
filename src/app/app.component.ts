import { Component, Input } from '@angular/core';
import { Brew } from './models/brew.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



  potions: Brew[] = [
    new Brew("Dragon Tooth Tea", "Health", ["1 Dragon Tooth", "3 dragon balls", " 4 cups dragon piss"],75, 300, "One"),
    new Brew("Titan Grip", "Strength", ["b"],45, 150, "Two"),
    new Brew("Mana Wraith Essence", "Mana", ["b"],50, 200, "Three"),
    new Brew("Giant's Toe Ale", "Stamina", ["b"],25, 100, "Four"),
  ]

  newPot = null;

  editPotion(clickedPot) {
      this.newPot = clickedPot;
    }
  finishedEditing() {
      this.newPot = null;
  }




}
