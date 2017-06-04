
  $(document).ready(function() {


//  Initial Variables    

      var images = ["ch0","ch1","ch2","ch3"] ;
      var hp = [120,80,180,160];
      var ap = [6,3,4,6];
      var cap = [4,4,10,6];
      var description = ["Rey","Yoda","Kylo","Stormtrooper"];
      var used = [];

      var yhp,yap,ycap; // your attributes
      var ehp,eap,ecap; // enemies attributes

      var youId,eneId; // 
      var enemy = 1; // to keep track of no of enemies used

      var youpicked = false; // Identify whether your character  has picked
      var enepicked = false; // Identify whether enemy character has picked
      var you = true;  // parameter passed after selecting players


//  Create Images & desplay details ;

      CreateImages = function(){

        $("#characters").empty();
        $(".details").empty();
        $(".character-image").empty();

        for (var i = 0 ; i < images.length ; i++){
          var starwarsCharacters = $("<img>");
          starwarsCharacters.addClass("character-image");
          starwarsCharacters.attr("src", "assets/images/"+images[i]+".png");
          starwarsCharacters.attr("id",i);
          starwarsCharacters.css({width : "120px" , height : "200px"});
          $("#characters").prepend(starwarsCharacters);  
        }

        for (i = 0 ; i < hp.length ; i++) {
          var NewDiv = $("<div>");
          NewDiv.addClass("detailsClass");
          NewDiv.text(description[i] + " -  HP : " + hp[i] + " |  AP : " + ap[i]);
          NewDiv.append('<br />');
          $(".details").prepend(NewDiv);
        }
        
        alert("Pick a character for you");
      }
      
// calling the function to create images
      CreateImages();


// Find Attributes when clicked a character
    findAtt = function(id,you){
        var id = parseInt(id);         

        // Find Enemy powers and Your powers
        if (you === true){

          youId = id ;
          $(".yhp").text(hp[id]);
          $(".yname").text(description[id]);
          yhp = (hp[id]);
          yap = (ap[id]);
          ycap = (cap[id]);

        } else if (you === false) {
          eneId = id ;
          $(".ehp").text(hp[id]);
          $(".ename").text(description[id]);
          ehp = hp[id];
          eap = ap[id];
          ecap = cap[id];
        }

    }


// choosing characters on click

       $("#characters").on("click",".character-image",function(event) { //Change "img"

          if (youpicked === false){
            console.log(this);
            $(this).fadeOut('fast');
            $("#youarea").html(this);
            $(this).fadeIn('fast');
            $("#you").fadeIn('slow');
            $('#enemy').fadeOut('slow');
            youpicked = true;            
            findAtt(this.id,you);
            alert("pick an enemy to attack");
          }
          else if (enepicked === false){
             /* if ( enemy === 4) {
                  alert("Congratulations ! You Won");
                  playagain();
              }*/
              if (enemy != 4) {
                  console.log("Another character picked");
                  if ( enemy === 1) {
                      //alert("Pick character to attack");
                  }
                  $("#enemy").fadeIn('slow');
                  $(this).fadeOut('fast');
                  $("#enearea").html(this);
                  $(this).fadeIn('fast');
                  eneId = $(this).attr("id");
                  enepicked = true; 
                  findAtt(this.id,!you);
                  enemy++;
                  console.log("enemy " + enemy);
              } 
          }
       });     


// Playagain when you lose
       playAgain = function(){
          $("#you").fadeOut('slow');
          $("#enemy").fadeOut('slow');
          $("#characters").empty();
          //$("#ydetails").empty();
          youpicked = false;
          enemy = 1;
          CreateImages(); 
       }; 


// Attack Button

      $(".attack").on("click",function(event){

        if ( youpicked === true && enepicked === true ) {
              // Your health ( Your health - enemy's counter attack power)
              yhp -= ecap; 
              $('.yhp').text(yhp);

              // Enemy's health ( Enemy's health - your attack power)
              ehp -= yap ;
              $('.ehp').text(ehp);

              // increase attack power 
              yap += ap[youId];

              if (yhp <= 0) {
                  alert("You lose ! ")
                  playAgain();
              }
              else if (ehp <= 0) {
                  if ( enemy === 4 ) {
                     alert("You Won !");
                     playAgain();
                  }
                  else {
                     alert("Pick another character to attack");
                     $("#enemy").fadeOut('slow');
                     enepicked = false; 
                  }             
              }
        }
        else {
           alert ("Pick characters to attack");
        }

      });   


//  Hover over the crystals
      $(".character-image").hover(function(){
          $(this).css({backgroundColor : "#2c3e50" , "border-radius" : "25px"});
      },
      function(){
          $(this).css("backgroundColor" ,"#ecf0f1");
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
      $("body").attr({background: 'assets/images/star.jpg'});
      $("#header1").fadeTo('slow', 0.5 );
      $("#header1").fadeTo('slow', 1);
      $(".panel-heading").css('backgroundColor','#999999');
      $(".panel-heading").css('color','#ffffff');      
});


$("#logoanimation").hover(function(){
   $(this).css({opacity : "0.25" });
},
function(){
   $(this).css({opacity : "1"});
});

//   Animation
/*
Animation = function(){
   $("#logoanimation").attr({left: '1250px' , backgroundColor :'red'});
  console.log("inside animation");
}

Animation();

*/