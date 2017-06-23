window.onload = function() {
	$("#question1").fadeOut("fast");
	$("#options1").fadeOut("fast");
	$("#start").click(start);
	$("#main").hide("fast");
	$("#done").hide("fast");
}
var count=30;
var flag=false;
var correct=0;
var wrong=0;

function start() {
	if(!flag) {
		$("#start").remove();
		$("#options1").fadeIn("fast");
		$("#question1").fadeIn("fast");
		$("#main").show("fast");
		$("#done").show("fast");
		intervalID = setInterval(timer,1000);	
	}
}

function register(id, expectedAnswer) {
	var flag=0;
	$("input[name='"+ id +"']").click(function(){ 
		var answer1	= $('input[name='+ id +']:checked').val();
		if (answer1 === expectedAnswer) {
			console.log("Correct");
			correct++;
		}
		else {
			console.log("Wrong");
			wrong++;
		}	
	});
}

register('choice1', "Greece");
register('choice2', "Corrona");
register('choice3', "Melbourne");
register('choice4', "Charlton Heston");
register('choice5', "hygrometer");
register('choice6', "Venus and Earth");
register('choice7', "Tom Cruise");
register('choice8', "a dance");
register('choice9', "−45 °F");
register('choice10',"Saudi Arabia");

function timer() {
	count--;
	$("#timer").text("Time left: " + count + " seconds");
	if (count === 0) {
		flag=true;
		clearInterval(intervalID); 
		$("#display").html("<h2>Time up!" + "</h2>");
		$("#display").append("<p>Correct Answers: " + correct+ "</p>");
		$("#display").append("<p>Wrong Answers: " + wrong + "</p>");
		$("#display").append("<p>Unanswered: " + (10-correct-wrong) + "</p>");
	}
}

$("#done").click(function() {
	clearInterval(intervalID);
	$("#display").html("<p>Correct Answers: " + correct+ "</p>");
	$("#display").append("<p>Wrong Answers: " + wrong + "</p>");
	$("#display").append("<p>Unanswered: " + (10-correct-wrong) + "</p>");
});



































