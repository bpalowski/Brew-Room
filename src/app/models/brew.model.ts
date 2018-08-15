export class Brew{
  amount: number = 125;
  showEdit: null = null;

  constructor(public name: string, public type: string, public ingredients: string[], public potency: number, public cost: number, public potionId: string) {}

  hideShow() {
    var x = document.getElementById(this.potionId);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

listInd() {
  let testString = "Ingredients: ";
  for (let i = 0; i < this.ingredients.length; i++) {
  if (i === this.ingredients.length-1) {
    testString += this.ingredients[i];
} else {
    testString += this.ingredients[i] + ", ";
}
  }
  return testString;
}


}
