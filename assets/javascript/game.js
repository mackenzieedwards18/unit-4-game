$(document).ready(function(){
    var Random = Math.floor(Math.random() * 101 + 19)

    $('#showRandomNumber').text(Random);

    var num1 = Math.floor(Math.random() * 11 + 1)
    var num2 = Math.floor(Math.random() * 11 + 1)
    var num3 = Math.floor(Math.random() * 11 + 1)
    var num4 = Math.floor(Math.random() * 11 + 1)

    var userTotal = 0;
    var wins = 0;
    var losses = 0;

    $('#wins').text(wins);
    $('#losses').text(losses);

    function generateCrystal(i) {
       var imageHolderDiv = $("<div>");
     

       imageHolderDiv.attr(
           {
               "class" : "crystalImage col-md-2",               
               "data-randomNumber": Math.floor(Math.random() * 11 + 1)
           }
       );
       
       var imageDiv = $("<img>");

       imageDiv.attr(
           {
               "src": "./assets/images/crystal-" + i + ".jpg",
               "class": "crystalImg"
           }
       );

       imageHolderDiv.append(imageDiv)
       $("#imageholder").append(imageHolderDiv);
       
    }

    function fourNew(){
        $("#imageholder").empty();
        for(var i = 0; i < 4; i++){
            console.log("new crystal")
            generateCrystal(i)
        }
    }

    fourNew();

    $("#imageholder").on("click", ".crystalImage", function(){
        console.log($(this))
        console.log($(this)[0].dataset.randomnumber)
        userTotal = userTotal + parseInt($(this)[0].dataset.randomnumber);
        console.log("user total is: " + userTotal)
        $('#totalscore').text(userTotal);
        
        if(userTotal > Random){
            youlose();
        }
        else if (userTotal === Random){
            youwon();
        }
        else{
            console.log("continue game");
        }
        // alert("alert")
    })

    function reset() {
        Random = Math.floor(Math.random() * 101 + 19);
        console.log(Random);
        $('#showRandomNumber').text(Random);
        num1 = Math.floor(Math.random() * 11 + 1);
        num2 = Math.floor(Math.random() * 11 + 1);
        num3 = Math.floor(Math.random() * 11 + 1);
        num4 = Math.floor(Math.random() * 11 + 1);
        fourNew();
        userTotal = 0;
        $('#totalscore').text(userTotal);
    }

    function youwon(){
        wins++;
        $('#wins').text(wins);
        reset();
    }

    function youlose(){
        losses++;
        $('#losses').text(losses);
        reset()
    }



    // $('#first').on ('click', function(){
    //     userTotal = userTotal + num1;
    //     console.log("New userTotal= " + userTotal);
    //     $('#totalscore').text(userTotal);
            
    //     if (userTotal == Random){
    //         youwon();
    //     }
    //     else if ( userTotal > Random){
    //         youlose();
    //     }
    // })
    // $('#second').on('click', function(){
    //     userTotal = userTotal + num2;
    //     console.log("New userTotal= " + userTotal);
    //     $('#totalscore').text(userTotal); 
    //         if (userTotal == Random){
    //           youwon();
    //         }
    //         else if ( userTotal > Random){
    //           youlose();
    //         } 

    // })
    
    // $('#third').on ('click', function(){
    //     userTotal = userTotal + num3;
    //     console.log("New userTotal= " + userTotal);
    //     $('#totalscore').text(userTotal);
    // //sets win/lose conditions
    //           if (userTotal == Random){
    //           youwon();
    //         }
    //         else if ( userTotal > Random){
    //           youlose();
    //         } 
    //   })

    //   $('#fourth').on ('click', function(){
    //     userTotal = userTotal + num4;
    //     console.log("New userTotal= " + userTotal);
    //     $('#totalscore').text(userTotal); 
          
    //           if (userTotal == Random){
    //           youwon();
    //         }
    //         else if ( userTotal > Random){
    //           youlose();
    //         }
    //   });   
      



    });