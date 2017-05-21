
    $(document).ready(function() {


//  Initial Variables    
      var comPick = "";
      var total = "";  
      var images =["img1","img2","img3","img4"] ;
      var jewelValues = [];

//  import crystal images and generate values for the crystals

      CreateRandom = function(){

        total = 0;

        $("#total-value").html(total);
        $("#crystals").removeAttr()
        $("#img").removeAttr()
        jewelValues = [0,0,0,0];

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
          $("#crystals").append(imageCrystal);

        }
      
      };

      CreateRandom();

//  Click on jewells event 
      $(".crystal-image").on("click", function() {
        var crystalValue = ($(this).attr("data-crystalvalue"));
        console.log("value clicked " + crystalValue);
        crystalValue = parseInt(crystalValue);

        // New total value
        total += crystalValue;
        $("#total-value").html(total);

        // Exra rotate the image when clicked
       /* $(this).rotate({
           angle: 0;
           animateTo:180;
        });
        */

        //$(this).rotate(90);
        //console.log($(this));

        // Check whether it's equal or greater than computer pick
        gameOver();

      });

//  Compare total value
      function gameOver(){
        if (total > comPick){
          alert("You lose");          
          CreateRandom();
        }
        else if (total === comPick){
          alert("You Win");
          CreateRandom();
        }
      };

//  Create a background image for total marks
      //$("#computer-pick").css('backgroundImage','url(assets/images/gems.png)');
      $(".panel-heading").css('backgroundColor','#999999');
      $(".panel-heading").css('color','#ffffff');



});