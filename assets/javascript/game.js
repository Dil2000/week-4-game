
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

        comPick = Math.floor(Math.random() * 102)+ 19;
        $("#computer-pick").text(comPick);

        for (var i = 0 ; i < images.length ; i++) {

          jewelValue = Math.floor(Math.random() * 12) + 1;
          //Math.floor(Math.random()*(max - min + 1) + min);

          $(".crystal-image").eq(i).attr("value" , jewelValue);

        }

      };

// Callin the random function 
      CreateRandom();



//  Compare total value
      function gameOver(){
        if (total > comPick){
          loses++;
          $('#loses').text("No of Loses : " + loses);
          $('#loses').animate({fontSize: '2em'}, "slow");
           alert("You lose"); 
          CreateRandom();
        }
        else if (total === comPick){          
          wins++;
          $('#wins').text("No of Wins : " + wins);
          $('#wins').animate({fontSize: '2em'}, "slow");
          alert("You Win");
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
        $('#wins').animate({fontSize: '1em'}, "slow");
        $('#loses').animate({fontSize: '1em'}, "slow");

      });




//  Hover over the crystals
      $(".crystal-image").hover(function(){
          $(this).css({backgroundColor : "#2c3e50" , "border-radius" : "25px"});
      },
      function(){
          $(this).css("backgroundColor" ,"#ffffff");
      });

//  Hover over contact icons
      $(".icons").hover(function(){
          $(this).css("opacity","0.5");
      },
      function(){
          $(this).css("opacity","1");
      });

//  CSS Fun
     //width : "200px" , height :"200px" , backgroundRepeat: 'repeat-x'});
      $("body").attr({background: 'assets/images/back.jpg'});
      $("#header1").fadeTo('slow', 0.5 );
      $("#header1").fadeTo('slow', 1);
      $(".panel-heading").css('backgroundColor','#999999');
      $(".panel-heading").css('color','#ffffff');      
});