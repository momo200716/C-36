class Game{
   constructor(){

   }
getState(){
var gameRef = database.ref('gameState')
gameRef.on("value", function(data){
   gameState = data.val()
})
}
update(state){
    database.ref('/').update({gameState:state})
}
play(){
    form.hide()
    textSize(15)
    text("Game begins!", 250,100)
    Player.getplayerinfo()
    if(playerinfo!==undefined){
        var displaypos = 10;
        for(var pos in playerinfo){
            if(pos=="player"+player.index){
                fill("red")

            }
            else{
                fill("black")
            }
            displaypos = displaypos+10
            textSize(15)
            text(playerinfo[pos].name+"=:"+playerinfo[pos].distance,120,displaypos)
        }
    }
    if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance+= 50
        player.update();
    }
}
async start(){
    if(gameState === 0){
        player = new Player()
        var countref = await database.ref('playerCount').once("value")
        if(countref.exists()){
            playerCount = countref.val();
        player.getplayerCount()
        }
        form = new Form()
        form.display();
    }
}
}