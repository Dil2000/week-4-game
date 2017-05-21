
    $(document).ready(function() {


//  Initial Variables    
      var comPick = "";
      var total = "";  
      var images =["img1","img2","img3","img4"] ;
      var jewelValues = [];
      var loses = 0;
      var wins  = 0;


//  import crystal images and generate values for the crystals

      CreateRandom = function(){

        //Clean();

        total = 0;
        console.log("back in random");

        $("#total-value").html(total);

        comPick = Math.floor(Math.random() * 100)+ 19;
        $("#computer-pick").text(comPick);

        for (var i = 0 ; i < images.length ; i++){
          jewelValues[i] = 0
          jewelValues[i] = Math.floor(Math.random() * 10) + 1;
          //Math.floor(Math.random()*(max - min+1) + min);
         
          var imageCrystal = $("<img>");
          imageCrystal.addClass("crystal-image");
          imageCrystal.attr("src", "assets/images/"+images[i]+".png");
          imageCrystal.attr("data-crystalvalue",  jewelValues[i]);
          imageCrystal.css({width : "100px" , height : "100px"});
          $("#crystals").prepend(imageCrystal);
          console.log("end of random");
        }
      
      };

// Callin the random function 
      CreateRandom();



//  Compare total value
      function gameOver(){
        if (total > comPick){
          alert("You lose"); 
          loses++;
          $('#loses').text("No of Loses : " + loses);
          CreateRandom();
        }
        else if (total === comPick){
          alert("You Win");
          wins++;
          $('#wins').text("No of Wins : " + wins);
          CreateRandom();
        }
      };



//  Click on jewells event 
      $(".crystal-image").on("click", function() {
        console.log("clicked");
        var crystalValue = ($(this).attr("data-crystalvalue"));
        console.log("value clicked " + crystalValue);
        crystalValue = parseInt(crystalValue);

        // New total value
        total += crystalValue;
        $("#total-value").html(total);

        // Check whether it's equal or greater than computer pick
        gameOver();

      });



//  Click Play Again
      $("#again").on("click",function(){
        total = 0;
        jewelValues = [0,0,0,0];

        for (var i = 0 ; i < images.length ; i++){
          $(".crystal-image").remove();
          $("#crystals").append();
        }
        CreateRandom();
      });




//  Create a background image for total marks
      //$("#computer-pick").css('backgroundImage','url(assets/images/gems.png)');
      $(".panel-heading").css('backgroundColor','#999999');
      $(".panel-heading").css('color','#ffffff');

      
});