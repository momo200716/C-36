class Player{
    constructor(){
this.name = null
this.distance = 0;
this.index = 0;

    }
    getplayerCount(){
        var countref = database.ref('playerCount')
        countref.on('value', function(data){
            playerCount = data.val();
        })
    }
    updateData(count){
        database.ref('/').update({playerCount : count})
    }
    update(){
        var playerIndex = "players/player"+this.index
        database.ref(playerIndex).set({
            name:this.name, distance:this.distance
        })
    }
    static getplayerinfo(){
var playerref = database.ref("players")
playerref.on("value",(data)=>{
    playerinfo = data.val();
})
    }
}