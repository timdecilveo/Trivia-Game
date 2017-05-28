$(document).ready(function(){
	// hidden until you click start
	$("#submit-button").hide();
	$("#correctAnswer").hide();
	$("#incorrectAnswer").hide();
	$("correctPercentage").hide();

	var complete = false;
	// *** Timer that runs down to 0 ***
	var number = 100;
	var intervalId;

	var questions = {
		questionsArray:
		[{question: "1) What is the sum of the integers from 1 to 100?",
			a: "5,000",
			b: "5,050",
			c: "6,000",
			d: "6,050",
			answer: "5,050"},
		{question: "2) How long is one regular term for a U.S. Representative?",
			a: "3 years",
			b: "2 years",
			c: "4 years",
			d: "5 years",
			answer: "2 years"},
		{question: "3) Which of the following states is not on the Gulf of Mexico?",
			a: "Georgia",
			b: "Alabama",
			c: "Texas",
			d: "Mississippi",
			answer: "Georgia"},
		{question: "4) What is the first time after 3PM when the hour and minute hands of a clock are exactly on top of each other?",
			a: "3:15",
			b: "3:15 4/11ths of a minute",
			c: "3:16",
			d: "3:16 4/11ths of a minute",
			answer: "3:16 4/11ths of a minute"},
		{question: "5) Between 1455 and 1485, the War of the Roses took place in what country?",
			a: "France",
			b: "England",
			c: "Germany",
			d: "Spain",
			answer: "England"},
		{question: "6) It's three fifteen PM. What is the degree difference between the hour hand and minute hand?",
			a: "0 degrees",
			b: "6 degrees",
			c: "7.5 degrees",
			d: "90 degrees",
			answer: "7.5 degrees"},
			{question: "7) There are 27 lily pads on a pond. Each of the lily pads is one square foot in area. The pond is 6,000 square feet in area. Each lily pad doubles its size every day. How long until the pond is covered in lily pads?",
			a: "6.8 days",
			b: "7.2 days",
			c: "7.8 days",
			d: "8.2 days",
			answer: "7.8 days"},
			{question: "8) Can the mean of any two consecutive prime numbers ever be prime?",
			a: "Yes",
			b: "No",
			c: "What?",
			d: "Who cares?",
			answer: "No"}]
	};

	$("#start-button").click(function() {
		$("#start-button").hide();
		$("#submit-button").show();
		$("#rules").hide();

		function run() {
			intervalId = setInterval(decrement, 1000);
			function decrement() {
				number--;
				$("#timer").html("<div>Time Left on the Clock: " + number + "</div>");
				if (number === 0) {
					stop();
					if(!complete){
						complete = true;
						answerKey()
					}
				}
			}
			function stop() {
				clearInterval(intervalId);
			}
		}

		for(var i = 0; i < questions.questionsArray.length; i++){
			$("#questionQ").append("<div>" + questions.questionsArray[i].question + "</div><br>"
			+ "<div><input type = 'radio' name = " + i + " value = " + "'" + questions.questionsArray[i].a + "'" + ">" + questions.questionsArray[i].a + "</div>"
			+ "<div><input type = 'radio' name = " + i + " value = " + "'" + questions.questionsArray[i].b + "'" + ">" + questions.questionsArray[i].b + "</div>"
			+ "<div><input type = 'radio' name = " + i + " value = " + "'" + questions.questionsArray[i].c + "'" + ">" + questions.questionsArray[i].c + "</div>"
			+ "<div><input type = 'radio' name = " + i + " value = " + "'" + questions.questionsArray[i].d + "'" + ">" + questions.questionsArray[i].d + "</div><br>");
		}

		$("#submit-button").click(function(){
			if(!complete){
				complete = true;
				clearInterval(intervalId);
				answerKey();
			}
		});

		function answerKey(){
			var answersCorrect = 0;
			var answersIncorrect = 0;
			var i = 0;
			$("input").each(function(index){
				if ($(this).is(":checked")){
					i = parseInt($(this).attr("name"));
					if ($(this).val() === questions.questionsArray[i].answer){
						answersCorrect++;
					}
					else {
						answersIncorrect++;
					}
				}
			});
			var round = Math.round(100 * ( answersCorrect / (questions.questionsArray.length)) *10 / 10);
			$("#correctAnswer").html("Number correct: " + answersCorrect);
			$("#incorrectAnswer").html("Number incorrect: " + answersIncorrect);
			$("#correctPercentage").html("Percentage correct: " + round + "%");
			$("#correctAnswer").show();
			$("#incorrectAnswer").show();
			$("correctPercentage").show();
			$("#submit-button").hide();
			$("#timer").hide();
			$("#questionQ").hide();
		}

		// Run the functions after start button click
		run();
	})


})


