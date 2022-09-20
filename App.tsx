import React, { useState, useCallback } from 'react';
import { QuestionState, fetchQuestions } from './API';
import './style.css';
//components
import QuestionCard from './components/QuestionCard';
//types
import { Difficulty } from './API';
import "./App.styles.css"

export type AnswerObject = {
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
    const nextQuestion = number + 1;
    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true)
    } else {
      setNumber(nextQuestion)
    }
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

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    let answer = e.currentTarget.value;
    let correct = answer == questions[number].correct_answer
    if (correct) setScore((prev) => prev + 1);
    //create an answer obj
    const answerObject: AnswerObject = {
      question: questions[number].question,
      answer,
      correct,
      correctAnswer: questions[number].correct_answer,
    }
    //add the correct answer to the array 
    setUserAnswers(prev => [...prev, answerObject]);
  };

  return (
    <div className="App">
      <h1>Quiz!</h1>
      {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
        <button onClick={startTrivia}>Start</button>
      ) : null}
      {!gameOver && <p>Score: {score}</p>}
      {loading && <p>Loading questions...</p>}
      {!gameOver && !loading && (
        <div className="Card">
        <QuestionCard
        
          questionNumber={number + 1}
          totalQuestions={TOTAL_QUESTIONS}
          question={questions[number].question}
          answers={questions[number].answer}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnswer}
        />
        </div>
      )}
      {!gameOver &&
      !loading &&
      number !== TOTAL_QUESTIONS - 1 &&
      userAnswers.length == number + 1 ? (
        <button className="next" onClick={nextQuestion}>
          {' '}
          Next Question
        </button>
      ) : null}
    </div>
  );
}
