/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var monResult = $("#money").val();
        var carResult = $("#car").val();
        var wallResult = $("#wallet").val();
        var aniResult = $("#animal").val();
        var totalScore = 0;
        totalScore= calculateScoreFromAnswer(monResult) + calculateScoreFromAnswer(carResult)+ calculateScoreFromAnswer(wallResult)+ calculateScoreFromAnswer(aniResult);
        var team = placement(totalScore);
        displayResult(name,team);

    });
    
    
    function displayResult(name,team){
        if (team === "Error"){
            alert("Check your responses, make sure they are valid");
        }else {
       return $(".result").html("<h2>Congratulations, " + name + " you're going to be part of " + team + "</h2>");
        }
      }
      
     
      
    function calculateScoreFromAnswer(answer) {
        if (answer=== "a"){
            return 1;
        }
        else if (answer === "b"){
            return 2;
        }
        else if (answer==="c"){
            return 3;
        }
        
        else{
            return -1000;
        }
        
    }
    //4-6
    //7-9
    //10-12
    //sorry

function placement(totalScore) {
    if (totalScore >= 4 && totalScore <= 6){
    return "F.C Barcelona";

    }else if (totalScore >= 7 && totalScore <= 9){
        return "Real Madrid";
    }else if (totalScore >=10 && totalScore <= 12){
        return "F.C Bayren Munich";

    }else{
        return "Error";
    }
}


});