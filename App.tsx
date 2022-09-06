import React, {useState} from 'react';
import './style.css';
import QuestionCard from "./components/QuestionCard"

const TOTAL_QUESTIONS = 10;

export default function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

const nextQuestion = () => {

}

const startTrivia = () => {

}

const checkAnswer = () => {

}

  return (
    <div>
      <h1>Quiz!</h1>
      {/*  */}
      <button onClick={startTrivia}>Start</button>
      <p>Score:</p>
      {/*  */}
      <p>Loading questions...</p>
      <QuestionCard
        questionNumber={number+1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answer={questions[number].answers}
        userAnswer={userAnswers? userAnswers[number] : undefined}
        callback={checkAnswer}
      />
    </div>
  );
}
