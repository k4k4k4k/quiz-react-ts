import React, { useState, useCallback } from 'react';
import { QuestionState, fetchQuestions } from './API';
import './style.css';
//components
import QuestionCard from './components/QuestionCard';
//types
import { Difficulty } from './API';

type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;

export default function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0); // number of question 
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const nextQuestion = () => {
    number < 10 ? setNumber(number + 1) : setGameOver(true);
  };

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchQuestions(TOTAL_QUESTIONS, Difficulty.EASY);
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  console.log(questions);
  const checkAnswer = (e:React.MouseEvent<HTMLButtonElement>) => {
    // let answer = e.target.value;
    // let correct = answer ==
  };

  return (
    <div>
      <h1>Quiz!</h1>
      {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
        <button onClick={startTrivia}>Start</button>
      ) : null}
      {!gameOver && <p>Score:</p>}
      {loading && <p>Loading questions...</p>}
      {!gameOver && !loading && (
        <QuestionCard
          questionNumber={number + 1}
          totalQuestions={TOTAL_QUESTIONS}
          question={questions[number].question}
          answers={questions[number].answer}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnswer}
        />
      )}
      {!gameOver && !loading && number !== TOTAL_QUESTIONS - 1 && userAnswers.length == number + 1?  <button className="next" onClick={nextQuestion}>
        {' '}
        Next Question
      </button> : null}
    </div>
  );
}
