
    $(document).ready(function() {


// Initial Variables    
      var comPick = "";
      var greenB = "";
      var redB = "";
      var blueB = "";
      var yellowB = "";
      var total = 0;    


//Generate randoms
      CreateRandom = function(){
        total = 0;
        console.log("inside random");
        comPick = Math.floor(Math.random() * 102) + 19;
        greenB = Math.floor(Math.random() * 12) * 1;
        blueB = Math.floor(Math.random() * 12) * 1;
        yellowB = Math.floor(Math.random() * 12) * 1;
        redB = Math.floor(Math.random() * 12) * 1;
        $("#computer-pick").html(comPick);
        console.log("total : " + total);
        $("#total-value").html(total);
        console.log("Green : " + greenB + " / Red : " + redB+ " / Blue : " + blueB + " / Yellow : " + yellowB);
      }

      CreateRandom();

// Compare total value
      function gameOver(){
        console.log(total);
        console.log("Total : " + total + " comPick : " + comPick);
        if (total > comPick){
          alert("You lose");          
          CreateRandom();
        }
        else if (total === comPick){
          alert("You Win");
          CreateRandom();
        }
      };

// Calculate  total value
      function Calculate(value){
        total = total + value;
        $("#total-value").html(total);
        console.log(total);
        gameOver();
      }

// Button click events
      $("#btnG").click(function(){
        Calculate(greenB);
      });

      $("#btnR").click(function(){
        Calculate(redB);
      });

      $("#btnB").click(function(){
        Calculate(blueB);
      });

      $("#btnY").click(function(){
        Calculate(yellowB);
      });

// Find Random Jewels and update the html


// create div tags under append the text
// create divs  alert("Your new score is: " + counter);

});
     
