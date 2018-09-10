$(document).ready(function(){
    var score, targetnumber;
    var Success= 0;
    var Failure= 0;

    resetGame();

    $('.gems').on("click", function(){
        score += parseInt($(this).val());
        $("#score").html(score);
    
        if(score == goalNumber){
            alert("Success! Congradulations.");
            Success++;
            resetGame();
        }
        if(score > goalNumber){
            alert("Failure. Too Bad...");
            Failure++;
            resetGame();
        }
    });
    
    if(score == goalNumber){
        alert("Success! Congradulations.");
        Success++;
        resetGame();
    }
    if(score > goalNumber){
        alert("Failure. Too Bad...");
        Failure++;
        resetGame();
    }
    
    
    function resetGame(){
        score = 0;
        goalNumber = Math.floor((Math.random() * 15) + 40);
        $("#Gem1").val(Math.floor((Math.random() * 7) + 3));
        $("#Gem2").val(Math.floor((Math.random() * 7) + 3));
        $("#Gem3").val(Math.floor((Math.random() * 7) + 3));
        $("#Gem4").val(Math.floor((Math.random() * 7) + 3));
        $("#goal").html(goalNumber);
        $("#score").html(score);
        $("#Success").html(Success);
        $("#Failure").html(Failure);
    }
})