const shuffleArray = (array: any[]) => {
  const arr = [...array].sort(() => Math.random() - 0.5);
  return arr;
}
  
