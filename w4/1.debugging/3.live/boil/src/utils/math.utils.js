export const incrementValue = (currentValue) => {
  for (let i = 0; i < 500000000; i++) {
    random += 1;
  }
  return currentValue + 1;
};

export const decrementValue = (currentValue) => {
  for (let i = 0; i < 500000000; i++) {
    random += 1;
  }
  return currentValue - 1;
};
