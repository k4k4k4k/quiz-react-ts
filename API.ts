export type Question = {
  category: string;
  correct_answer: string;
  incorrect_answers: string[];
  difficulty: string;
  question: string;
  type: string;
};

export type QuestionState = Question & { answers: string[] }; //unite correct & incorrect answers - to have a common array

export enum Difficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
}

export const fetchQuestions = async (
  amount: number,
  difficulty: Difficulty
) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;

  // const data = await (await fetch(endpoint)).json(); // 1 await is for fetch and second is for json
  const resp = await fetch(endpoint);
  const data = await resp.json();

  console.log(data.results, 'data');
  // const res = data.results.map((question: Question) => ({
  //   ...question,
  //   answer: shuffleArray([
  //     question.correct_answer,
  //     ...question.incorrect_answers,
  //   ]),
  // }));
  const res = data.results.map((question: Question) => ({
      ...question,
      answer: shuffleArray([
        question.correct_answer,
        ...question.incorrect_answers,
      ]),
    }));
  console.log(res, 'res');
  return res;
};
