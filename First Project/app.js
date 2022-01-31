new Vue({
    el: '#exercise',
    data: {
      playerHealth: 100,
      monsterHealth: 100,
      gameNew: true,
      showButtons: false,
      moves: []
    },
    methods: {
      startGame: function() {
        this.gameNew = false;
        this.showButtons = true;
      },
      attack: function() {
        healthCost = parseInt(Math.random() * 10, 10);
        monsterCost = parseInt(Math.random() * 10, 10);
        this.playerHealth -= healthCost;
        this.monsterHealth -= monsterCost;
        this.checkBounds();
        this.moves.push("Monster hits Player for " + healthCost);
        this.moves.push("Player hits Monster for " + monsterCost);
        this.checkEndGame();
      },
      specialAttack() {
        healthCost = parseInt(Math.random() * 10, 10);
        monsterCost = parseInt(Math.random() * 20, 10);
        this.playerHealth -= healthCost;
        this.monsterHealth -= monsterCost;
        this.checkBounds();
        this.moves.push("Monster hits Player for " + healthCost);
        this.moves.push("Player hits Monster with Special Attack for " + monsterCost);
        this.checkEndGame();
      },
      heal: function() {
        healthCost = parseInt(Math.random() * 15, 10);
        monsterCost = parseInt(Math.random() * 10, 10);
        this.playerHealth += healthCost;
        this.playerHealth -= monsterCost;
        this.checkBounds();
        this.moves.push("Monster hits Player for " + healthCost);
        this.moves.push("Player Heals for " + monsterCost);
        this.checkEndGame();
      },
      giveUp: function() {
        this.gameNew = true;
        this.showButtons = false
        this.playerHealth =  100,
        this.monsterHealth = 100,
        this.moves = []
      },
      checkEndGame: function() {
        if (this.playerHealth <= 0) {
          alert("You Lose!");
          this.giveUp();
        }
        if (this.monsterHealth <= 0) {
          alert("You Win!");
          this.giveUp();
        }
      },
      checkBounds: function() {
        if (this.playerHealth < 0) this.playerHealth = 0;
        if (this.playerHealth > 100) this.playerHealth = 100;
        if (this.monsterHealth < 0) this.monsterHealth = 0;
      }
    }
  });
  