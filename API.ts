export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export const fetcjQuestions = async(amount: number, difficulty: Difficulty) {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;

  const data = await (await fetch(endpoint)).json(); // 1 await is for fetch and second is for json
  console.log(data)
}