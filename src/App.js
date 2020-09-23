import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
		{
			questionText: 'Who is called as the Father of Computer Science?',
			answerOptions: [
				{ answerText: 'Charles Babbage', isCorrect: false },
				{ answerText: 'Ronald Dahl', isCorrect: false },
				{ answerText: 'Alan Turing', isCorrect: true },
				{ answerText: 'Seymour Cray', isCorrect: false },
			],
		},
		{
			questionText: 'What character does Tom Cruise portray in Mission Impossible series?',
			answerOptions: [
				{ answerText: 'Jason Bourne', isCorrect: false },
				{ answerText: 'Ethan Hunt', isCorrect: true },
				{ answerText: 'James Bond', isCorrect: false },
				{ answerText: 'Neo', isCorrect: false },
			],
		},
		{
			questionText: 'Which is Naruto\'s most powerful Justu?',
			answerOptions: [
				{ answerText: 'Rasengen', isCorrect: false },
				{ answerText: 'Shadow Clone Jutsu', isCorrect: false },
				{ answerText: 'Rasen-shuriken', isCorrect: false },
				{ answerText: 'Talk-no-Justus', isCorrect: true },
			],
		},
		{
			questionText: 'What is Ichigo Kurusaki\'s (from Bleach) Zanpakuto named?',
			answerOptions: [
				{ answerText: 'Senbonzakura', isCorrect: false },
				{ answerText: 'Zangetsu', isCorrect: true },
				{ answerText: 'Kazeshini', isCorrect: false },
				{ answerText: 'Ryurin Jakka', isCorrect: false },
			],
		}
	];
	const [currentQuestion, setCurrentQuestion] = useState(0);

	const [showScore, setShowScore] = useState(false);

	const [score, setScore] = useState(0);

	const handleAnswerButtonClick = (isCorrect) => {
		if(isCorrect === true){
			setScore(score + 1);
		}
		const nextQuestion = currentQuestion + 1;
		if(nextQuestion < questions.length){
			setCurrentQuestion(nextQuestion);
		}else{
			setShowScore(true);
		}

	}
	return (
		<div className='app'>
			{/* HINT: replace "false" with logic to display the
      score when the user has answered all the questions */}
			{showScore ? (
				<div className='score-section'>You scored {score} out of {questions.length}</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion+1}</span>/{questions.length}
						</div>
						<div className='question-text'>{ questions[currentQuestion].questionText }</div>
					</div>
					<div className='answer-section'>
						{ questions[currentQuestion].answerOptions.map((answerOptions) =>
							<button onClick={() => handleAnswerButtonClick(answerOptions.isCorrect)}>{ answerOptions.answerText }</button>) }
					</div>
				</>
			)}
		</div>
	);
}
