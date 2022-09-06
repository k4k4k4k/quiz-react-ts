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
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(fetchQuestions(TOTAL_QUESTIONS, Difficulty.EASY));

  const nextQuestion = () => {};

  const startTrivia = async () => {
    console.log("!")
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuestions(TOTAL_QUESTIONS, Difficulty.EASY);
    console.log("!11")

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
    console.log(loading)
  };

  const checkAnswer = () => {};

  return (
    <div>
      <h1>Quiz!</h1>
      {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
        <button onClick={startTrivia}>Start</button>
      ) : null}
      {!gameOver && <p>Score:</p>}

      {loading && <p>Loading questions...</p>}
      {!gameOver && !loading && <QuestionCard
        questionNumber={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answer={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
      />}
      <button className="next" onClick={nextQuestion}>
        {' '}
        Next Question
      </button>
    </div>
  );
}
