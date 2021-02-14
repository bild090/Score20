$(document).ready(function(){
    // open game explained
    $("#explained").on("click", function(){
        $(".description").toggleClass("active");
    });
    // close game explained
    $("#close").on("click", function(){
         $(".description").removeClass("active");
    })
    let player1 = "player1";
    let player2 = "player2";
    // players names
    $("#start").on("click", function(){
        player1 = $("#player1").val();
        player2 = $("#player2").val();
        if(player1 != ""){
            localStorage.setItem("player1", player1);
        }
        else{
            localStorage.setItem("player1", "player1");
        }
        if(player2 != ""){
            localStorage.setItem("player2", player2);
        }
        else{
            localStorage.setItem("player2", "player2");
        }
       window.location.href = "play.html";
    });
    
   $("#player1-p").text(localStorage.getItem("player1"));
   $("#player2-p").text(localStorage.getItem("player2"));
    // logo redirect
    $("#logo").on("click", function(){
        window,location.href = "index.html";
    });
    // playing 1
    let lock = true;
    $("#play2").prop('disabled', lock);
    $("#stop2").prop('disabled', lock);
    $("#img1").hide();
    $("#img2").hide();
    let curr1 = 0;
    $("#play1").on("click", function(){
        
        let dice = Math.floor((Math.random() * 6) + 1);
        curr1 +=dice;
        $("#curr1").text(curr1); 
        $("#img1").attr("src", "images/"+dice+".png");
        $("#img1").show();
    });
    // stop round
    let total1 = 0;
    $("#stop1").on("click", function(){
        total1 += curr1;
        $("#total-score1").text(total1);
        $("#curr1").text(0); 
        curr1 = 0;
        if(total1 >20){
            lose(localStorage.getItem("player1"));
            $("#total-score1").text(0);
            total1 = 0;
            redirect();
        }
        if(total1 === 20){
            win(localStorage.getItem("player1"));
            $("#total-score1").text(0);
            total1 = 0;
            redirect();
        }
        $("#play1").prop('disabled', lock);
        $("#stop1").prop('disabled', lock);
        $("#play2").prop('disabled', !lock);
        $("#stop2").prop('disabled', !lock);
    });

    // playing 2
    let curr2 = 0;
    $("#play2").on("click", function(){
        $("#play1").prop('disabled', lock);
        $("#stop1").prop('disabled', lock);
        let dice = Math.floor((Math.random() * 6) + 1);
        curr2 += dice;
        $("#curr2").text(curr2); 
        $("#img2").attr("src", "images/"+dice+".png");
        $("#img2").show();
    });
    // stop round
    let total2 = 0;
    $("#stop2").on("click", function(){
        total2 += curr2;
        $("#total-score2").text(total2);
        $("#curr2").text(0); 
        curr2 = 0;
        if(total2>20){
            lose(localStorage.getItem("player2"));
            $("#total-score2").text(0);
            total2 = 0;
            redirect();
        }
        if(total2 === 20){
            win(localStorage.getItem("player2"));
            $("#total-score2").text(0);
            total2 = 0;
            redirect();
        }
        $("#play2").prop('disabled', lock);
        $("#stop2").prop('disabled', lock);
        $("#play1").prop('disabled', !lock);
        $("#stop1").prop('disabled', !lock);
    });
    // lose function
    let lose = function(player){
        $("<audio></audio>").attr({
            'src':'audio/lose.mp3',
            'autoplay':'autoplay'
        });
        $(".l-w").text(player+" Lose");
        $(".l-w").css("visibility", "visible");
    }
    // win function
    let win = function(player){
        $("<audio></audio>").attr({
            'src':'audio/win.mp3',
            'autoplay':'autoplay'
        });
        $(".l-w").text(player+" Win");
        $(".l-w").css("visibility", "visible");
    }
    // redirect function
    let redirect = function(){
        localStorage.clear();
        setTimeout(function(){
            window.location.href = "index.html";
        },3000);
    }
  });