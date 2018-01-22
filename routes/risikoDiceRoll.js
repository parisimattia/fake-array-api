exports.risikoDiceRoll = function(nOfAttackDices, nOfDefenceDices) {
  var dice = require ('dice-001');
  //var diceRoll = dice();
  var attackDices = [];
  var defenceDices = [];
  var x =0;
  var y=0;

  for (i=0; i < nOfAttackDices; i++){
    attackDices.push(dice.dice());
  }

  for (i=0; i < nOfDefenceDices; i++){
    defenceDices.push(dice.dice());
  }

  attackDices = attackDices.sort(Math.min, Math.max);
  defenceDices = defenceDices.sort();

  for (i=0; i < 3;i++){
    if(attackDices[i] > defenceDices[i]){
      x++;
    }
    else {
      y++;
    }
  }

  return {attackDices: attackDices,defenceDices: defenceDices,attackLost: y, defenceLost: x};

}

console.log(this.risikoDiceRoll(3,3));
