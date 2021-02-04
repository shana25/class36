class Form 
{
    constructor() {}
  
    display()
    {
      var title = createElement('h2');
      title.html("Car Racing Game");
      title.position(120,15);
      
      var input = createInput("enter name");
      var button = createButton('PLAY');
     
      
      input.position(130,150);
      button.position(280,200);

      button.mousePressed(function()
                          {
                               input.hide();
                                button.hide();
  
                                var name =    input.value();

                                playerCount= playerCount+1;

                               player.updateName(name );
                               player.updateCount(playerCount);

                                var greeting = createElement('h3');
                                greeting.html("Hello " + name );
                                greeting.position(350,65);
                         });

    }
}
