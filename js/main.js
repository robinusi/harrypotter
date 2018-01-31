
// array of questions and answers
var questions = [	{
		question: "What house was Harry Potter in?",
		answer: "Gryffindor"
	},
	{
		question: "Who were Harry's parents?",
		answer:  "James and Lily"
	},
	{
		question: "Which Harry Potter word is now in the Oxford English Dictionary?",
		answer: "Muggle"
	},
	{
		question: "In order of birth, who are the seven Weasley siblings?",
		answer: "Bill, Charlie, Percy, Fred, George, Ron, Ginny"
	},
	{
		question: "What are the three Unforgivable Curses?",
		answer: "Avada Kedavra, Crucio and Imperio"
	},
	{
		question: "Who first shows Harry the diary of Tom Riddle??",
		answer: "Moaning Myrtle"
	},
	{
		question: "Who was Tom Marvolo Riddle??",
		answer: "Voldemort"
	},
	{
		question: "What's the only book in the Harry Potter series that doesn't feature Lord Voldemort?",
		answer: "The Prisoner of Azkaban"
	},
	{
		question: " Who was the Prisoner of Azkaban and was he guilty of the crime he was accused of committing?",
		answer: "Sirius Black, not guilty"
	}
];

// loop through each questions
for(var i = 0; i < questions.length; i++) {
	// store each question value
	var question = questions[i].question;
	// store each element to add question too
	var el = document.getElementById('question' + [i]);

	// check what question and element is being selected
	console.log(question, el);

	// update text content of each element
	el.textContent = question;
}

// check results when the user submits quiz
function testResults() {
	// store variables to update correct and incorrect totals
	var correct = 0;
	var incorrect = 0;

	// loop through questions array
	for(var i = 0; i < questions.length; i++) {
		// store each correct answer
		var answer = questions[i].answer;
		// store each user answer
		var guess = document.getElementById('answer' + [i]).value;
		// store element to add a class if correct or incorrect
		var questionSpot = document.getElementById('question' + [i]);

		// check if the user answer matches the correct answer
		if(answer == guess) {
			// update class on questionSpot
			questionSpot.className = 'correct';
			// add one to correct
			correct++;
		} else {
			// update class on questionSpot
			questionSpot.className = 'incorrect';
			// add one to incorrect
			incorrect++;
		};
	};

	// update correct and incorrect values
	document.getElementById('correct').textContent = correct;
	document.getElementById('incorrect').textContent = incorrect;
}
