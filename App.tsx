import * as React from 'react';
import './style.css';
import QuestionCard from "./components/QuestionCard"

export default function App() {
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
      <QuestionCard/>
    </div>
  );
}
