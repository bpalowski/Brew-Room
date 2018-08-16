import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Brew } from '../models/brew.model';

@Component({
  selector: 'app-potion-list',
  templateUrl: './potion-list.component.html',
  styleUrls: ['./potion-list.component.css']
})
export class PotionListComponent implements OnInit {
  @Input() childPotionList: Brew[];
  @Output() clickSender = new EventEmitter();

  editPotionShow(potionToShow: Brew) {
  this.clickSender.emit(potionToShow);
}


  title = 'Grand Master Eddies Potion Brewing Hut';


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

  soldPotion(potList) {
    if (potList.amount === 0) {
      potList.amount = 0;
    } else {
    potList.amount -= 1;
  }
  }





  constructor() { }

  ngOnInit() {
  }

}
