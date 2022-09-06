import React, {useState} from 'react';

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
  answers = [],
  callback,
  userAnswer,
  questionNumber,
  totalQuestions,
}) => {

  return (
    <div>
      <p>
        Question: {questionNumber}/{totalQuestions}
      </p>
      {answers.map(ans => <div>{ans}</div>)}
      <button onClick={callback}>Next Question</button>
    </div>
  );
};
export default QuestionCard;
