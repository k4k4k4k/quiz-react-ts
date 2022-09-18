import React, { useState } from 'react';

type Props = {
  question: string;
  answers: string[];
  callback: any;
  userAnswer: string;
  questionNumber: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNumber,
  totalQuestions,
}) => {
  console.log(answers, 'answers');
  return (
    <div>
      <p>
        Question: {questionNumber}/{totalQuestions}
      </p>
      {console.log('!', answers)}
      {answers.map((ans) => (
        <div key={ans}>
        <button disabled={userAnswer} value = {ans} onClick={callback}>{ans}</button>
        </div>
      ))}
      {/* {<button onClick={callback}>Next Question</button>}  */}
    </div>
  );
};
export default QuestionCard;
