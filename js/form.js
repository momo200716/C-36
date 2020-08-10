class Form{
    constructor(){
        this.input = createInput("Name")
        this.button = createButton("PLAY!")
        this.greeting = createElement('h1')
    }
hide(){
    this.input.hide()
    this.button.hide()
    this.greeting.hide()
}
    display(){
        var Title = createElement('h1')
        Title.html("Cabbie Game")
        Title.position(250,50)
       
        this.input.position(250,250)
      
       this.button.position(250, 300)
        var greeting = createElement('h1')
        this.button.mousePressed(()=>{
           this.input.hide()
           this.button.hide()
            player.invalue = this.input.value();
            playerCount+=1;
            player.updateData(playerCount)
            player.update()
            this.greeting.html("Hello"+ player.invalue)
            this.greeting.position(250,250)
            
        })
    }
}