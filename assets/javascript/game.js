
  $(document).ready(function() {


//  Initial Variables    
      var comPick = "";
      var total = "";  
      var images =["img1","img2","img3","img4"] ;
      var jewelValue = "";
      var loses = 0;
      var wins  = 0;


//  Create Images ;

      CreateImages = function(){
        for (var i = 0 ; i < images.length ; i++){
          var imageCrystal = $("<img>");
          imageCrystal.addClass("crystal-image");
          imageCrystal.attr("src", "assets/images/"+images[i]+".png");
          imageCrystal.css({width : "100px" , height : "100px"});
          $("#crystals").prepend(imageCrystal);          
        }
      }
      
// calling the function to create images
      CreateImages();


//  import crystal images and generate values for the crystals

      CreateRandom = function(){

        total = 0;
        $("#total-value").html(total);

        comPick = Math.floor(Math.random() * 100)+ 19;
        $("#computer-pick").text(comPick);

        for (var i = 0 ; i < images.length ; i++) {

          jewelValue = Math.floor(Math.random() * 10) + 1;
          //Math.floor(Math.random()*(max - min+1) + min);

          $(".crystal-image").eq(i).attr("value" , jewelValue);

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
        var crystalValue = ($(this).attr("value"));
        console.log("value clicked " + crystalValue);
        crystalValue = parseInt(crystalValue);

        // New total value
        total += crystalValue;
        $("#total-value").html(total);
        
         $(this).slideUp(100).slideDown(100)

        // Check whether it's equal or greater than computer pick
        gameOver();

      });


//  Create a background image for total marks
      //$("#computer-pick").css('backgroundImage','url(assets/images/gems.png)');
      $(".panel-heading").css('backgroundColor','#999999');
      $(".panel-heading").css('color','#ffffff');

      
});