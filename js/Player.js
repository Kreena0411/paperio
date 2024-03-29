class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.positionX = 0;
    this.positionY = 0;
    this.score = 0;
    
  }

  addPlayer() {
    console.log("addPlayer")
    var playerIndex = "players/player" + this.index;

    if (this.index === 1) {
      this.positionX = width / 2 - 100;
    } else {
      this.positionX = width / 2 + 100;
    }

    database.ref(playerIndex).set({
      name: this.name,
      positionX: this.positionX,
      positionY: this.positionY,
      score: this.score,
      
    });
  }

  // getDistance() {
  //   var playerDistanceRef = database.ref("players/player" + this.index);
  //   playerDistanceRef.on("value", data => {
  //     var data = data.val();
  //     this.positionX = data.positionX;
  //     this.positionY = data.positionY;
  //   });
  // }

  // getCarsAtEnd() {
  //   database.ref('carsAtEnd').on("value", data => {
  //     this.rank = data.val();
  //   })
  // }

  // // static fuctions a only be called by the class itself and not by the objects 
  // static updateCarsAtEnd(rank) {
  //   database.ref("/").update({
  //    carsAtEnd: rank
  //   })
  // }

  getCount() {
    console.log("getCount")
    var playerCountRef = database.ref("playerCount");
    playerCountRef.on("value", data => {
      playerCount = data.val();
      console.log(data.val())
    });
  }

  updateCount(count) {
    database.ref("/").update({
      playerCount: count
    });
  }

  // update() {
  //   var playerIndex = "players/player" + this.index;
  //   database.ref(playerIndex).update({
  //     positionX: this.positionX,
  //     positionY: this.positionY,
  //     score: this.score, 
  //   });
  // }

  static getPlayersInfo() {
    var playerInfoRef = database.ref("players");
    playerInfoRef.on("value", data => {
      allPlayers = data.val();
      //console.log(allPlayers)
     // console.log(Object.values(allPlayers))
    });
  }
}
