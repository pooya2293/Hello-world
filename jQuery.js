var playing = false;
var score;
var trailsleft;
var fruits = ["apple","banana","cherry","heart","mongo"];
var step;
var action;

$(function () {
	//click on start and reset button
	$("#startReseat").click(function () {

		//are we playing
		if(playing == true){

			//reload the page
			location.reload();

		//we are not playing
		}else {
			playing = true;

			//set score to 0
			score=0;
			$("#scoreValue").html(score);

			//show trails left
			$("#timeRemaning").show();
			trailsleft = 3;
			addHearths ();

			//start to reset game
			$("#startReseat").text('Reset Game');

			//start sending fruit
			startFruit ();
		}
	})




//click on start and reaset button
	// we playing
		//reload the page
		//if mouse hovering  
			//slise fruit 
			//increas score
	//we are not playing
		//show trials left
		//change bottom text to "reaset game"
		//1.creat a random fruit
		//define a random step
		//2.move fruit down one step evry 30 sec
			//is fruit too low?
			//yes-->do any trials left?
					//yes-->reapet nmb1.
					//no-->show:gameover&button text:start game
					//reduse trails
			//no-->reapet nmb2.
		//slise a fruit
			//play sound
			//explode fruit
			
 $("#fruit1").mouseover(function () {
 	score ++;
 	$("#scoreValue").html(score);
 })


 //functions
 
 //add hearth
 function addHearths () {
 	$("#timeRemaning").empty();
	for (var i = 0; i < trailsleft ; i++) {
		$("#timeRemaning").append('<img src="images/heart.png" class="life">')
	}
 }

 //random fruit
 function randomFruit () {
 	$("#fruit1").attr({
 		src: 'images/'+fruits[Math.round(Math.random()*4)] +'.png'	
 	});
 }

 //stop actions up to down fruit
 function stopAction () {
 	clearInterval(action);
 	$('fruit1').hide();
 }

 function startFruit () {
	$("#fruit1").show();
	randomFruit();

	//random position
	$("#fruit1").css({"left":Math.round(Math.random()*260),"top":-60})

	//generate a random step(*speed)
	step = Math.round(Math.random()*5)+1;

	//move down fruit by one step evry 100msec
	action = setInterval(function () {
		$("#fruit1").css("top", $("#fruit1").position().top + step)

		//ceck if the friue is too low
		if ($("#fruit1").position().top > $("#CatchBox").height()){
			//check any trails left
			if(trailsleft>1){
				$("#fruit1").show();
				randomFruit();
				$("#fruit1").css({"left":Math.round(Math.random()*260),"top":-60})
				step = Math.round(Math.random()*5)+1;
				//trails reduse by one
				trailsleft --;

				//populate trails left box
				addHearths();

			}else{
				playing== false;
				$("#Gameover").show();
				//show score in gameover box
				$("#Gameover").html('Game Over'+ '<br> your score is: '+score)
				//stop sending fruit
				stopAction ();
				$('#timeRemaning').hide();
				
			}
		}
	},15)
}
});